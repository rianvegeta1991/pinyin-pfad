# Pinyin-Pfad – PNG-Icons aus dem SVG-Motiv nachzeichnen.
#
# Auf dem Rechner gibt es keinen SVG-Renderer, deshalb wird das Motiv hier mit
# System.Drawing ein zweites Mal gezeichnet. Bei Logoaenderungen icon.svg,
# icon-maskable.svg UND diese Datei nachziehen – sonst laufen sie auseinander.
#
#   powershell -NoProfile -ExecutionPolicy Bypass -File icons.ps1

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$grund   = [System.Drawing.ColorTranslator]::FromHtml("#12141c")
$gold    = [System.Drawing.ColorTranslator]::FromHtml("#e5b451")
$zinnober= [System.Drawing.ColorTranslator]::FromHtml("#e0533f")

# Zeichnet das Motiv in eine Bitmap der Groesse $size.
#   $scale   – Motivgroesse relativ zur Kachel (1 = wie im SVG)
#   $radius  – Eckenradius in SVG-Einheiten (0 = randlos, fuer maskable)
function New-Icon {
    param([int]$size, [double]$scale, [double]$radius, [string]$ziel)

    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.Clear([System.Drawing.Color]::Transparent)

    $k = $size / 512.0      # SVG-Einheit -> Pixel

    # Hintergrund
    $grundPinsel = New-Object System.Drawing.SolidBrush($grund)
    if ($radius -le 0) {
        $g.FillRectangle($grundPinsel, 0, 0, $size, $size)
    } else {
        $r = [float]($radius * $k)
        $d = $r * 2
        $pfad = New-Object System.Drawing.Drawing2D.GraphicsPath
        $pfad.AddArc(0, 0, $d, $d, 180, 90)
        $pfad.AddArc($size - $d, 0, $d, $d, 270, 90)
        $pfad.AddArc($size - $d, $size - $d, $d, $d, 0, 90)
        $pfad.AddArc(0, $size - $d, $d, $d, 90, 90)
        $pfad.CloseFigure()
        $g.FillPath($grundPinsel, $pfad)
        $pfad.Dispose()
    }
    $grundPinsel.Dispose()

    # Motiv zentriert skalieren. Mittelpunkt des Motivs im SVG: (273, 267).
    $g.TranslateTransform([float]($size / 2.0), [float]($size / 2.0))
    $g.ScaleTransform([float]($k * $scale), [float]($k * $scale))
    $g.TranslateTransform(-273.0, -267.0)

    # Tonzeichen: der Bogen q95 60 190 0 ab (150,132) – als quadratische Bezier,
    # in eine kubische umgerechnet (Kontrollpunkte auf 2/3 der Strecke).
    $stift = New-Object System.Drawing.Pen($zinnober, 26)
    $stift.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $stift.EndCap   = [System.Drawing.Drawing2D.LineCap]::Round
    $g.DrawBezier($stift, 150.0, 132.0, 213.3, 172.0, 276.7, 172.0, 340.0, 132.0)
    $stift.Dispose()

    # Der Pfad
    $stift = New-Object System.Drawing.Pen($gold, 34)
    $stift.StartCap  = [System.Drawing.Drawing2D.LineCap]::Round
    $stift.EndCap    = [System.Drawing.Drawing2D.LineCap]::Round
    $stift.LineJoin  = [System.Drawing.Drawing2D.LineJoin]::Round
    $punkte = @(
        (New-Object System.Drawing.PointF(110, 400)),
        (New-Object System.Drawing.PointF(220, 320)),
        (New-Object System.Drawing.PointF(320, 345)),
        (New-Object System.Drawing.PointF(420, 180))
    )
    $g.DrawLines($stift, [System.Drawing.PointF[]]$punkte)
    $stift.Dispose()

    # Zielpunkt
    $pinsel = New-Object System.Drawing.SolidBrush($zinnober)
    $g.FillEllipse($pinsel, 420 - 34, 180 - 34, 68, 68)
    $pinsel.Dispose()

    $g.ResetTransform()
    $g.Dispose()
    $pfadDatei = Join-Path $root $ziel
    $bmp.Save($pfadDatei, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "geschrieben: $ziel ($size px)"
}

# "any": abgerundete Kachel, Motiv fast formatfuellend
New-Icon -size 192 -scale 1.0 -radius 96 -ziel "icon-192.png"
New-Icon -size 512 -scale 1.0 -radius 96 -ziel "icon-512.png"

# maskable: randloser Grund, Motiv auf 82 % – so bleibt es im Sicherheitskreis
New-Icon -size 512 -scale 0.82 -radius 0 -ziel "icon-512-maskable.png"

# Apple legt seine eigene Maske darueber, deshalb eckig und ohne eigene Rundung
New-Icon -size 180 -scale 0.96 -radius 0 -ziel "apple-touch-icon.png"
