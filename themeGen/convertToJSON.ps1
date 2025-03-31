param (
    [Parameter(Mandatory=$true)]
    [string]$InputPath,
    
    [Parameter(Mandatory=$true)]
    [string]$OutputPath
)

# Read the input file
$content = Get-Content -Path $InputPath -Raw

# Split the content into lines
$lines = $content -split "\r?\n"

# Initialize an empty hashtable to store the key-value pairs
$themeObj = @{}

# Process each line
foreach ($line in $lines) {
    # Skip empty lines
    if ([string]::IsNullOrWhiteSpace($line)) {
        continue
    }

    # Split the line by the first colon
    $parts = $line -split ":", 2
    
    # Check if the line has a valid key-value format
    if ($parts.Length -eq 2) {
        $key = $parts[0].Trim()
        $value = $parts[1].Trim()
        
        # Add to the hashtable if the key starts with --vscode
        if ($key -match "^--vscode") {
            $themeObj[$key] = $value
        }
    }
}

# Convert the hashtable to a JSON object format
$jsonObject = "{`n"
foreach ($key in $themeObj.Keys) {
    $value = $themeObj[$key]
    $jsonObject += "    '$key': '$value',`n"
}
$jsonObject = $jsonObject.TrimEnd(",`n")
$jsonObject += "`n}"

# Write the JSON object to the output file
$jsonObject | Out-File -FilePath $OutputPath -Encoding utf8

Write-Host "Conversion completed. JSON file created at $OutputPath"