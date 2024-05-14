# Correctly retrieve the USERPROFILE environment variable
$userProfile = [Environment]::GetFolderPath([Environment+SpecialFolder]::UserProfile)

# Ensure .ssh directory exists
$sshDir = Join-Path -Path $userProfile -ChildPath ".ssh"
if (-not (Test-Path -Path $sshDir)) {
    Write-Host "Creating .ssh directory at $sshDir"
    New-Item -ItemType Directory -Path $sshDir | Out-Null
    Write-Host ".ssh directory created."
}
else {
    Write-Host ".ssh directory already exists."
}

# Ensure .gitconfig exists
$gitConfigFile = Join-Path -Path $userProfile -ChildPath ".gitconfig"
if (-not (Test-Path -Path $gitConfigFile)) {
    Write-Host "Creating a placeholder .gitconfig file at $gitConfigFile"
    New-Item -ItemType File -Path $gitConfigFile | Out-Null
    Write-Host ".gitconfig file created."
}
else {
    Write-Host ".gitconfig file already exists."
}

Write-Host "Setup complete."
