#!/bin/bash

# Ensure .ssh directory exists
if [ ! -d "$HOME/.ssh" ]; then
    echo "Creating .ssh directory at $HOME/.ssh"
    mkdir -p "$HOME/.ssh"
    chmod 700 "$HOME/.ssh"
    echo ".ssh directory created."
else
    echo ".ssh directory already exists."
fi

# Ensure .gitconfig exists
if [ ! -f "$HOME/.gitconfig" ]; then
    echo "Creating a placeholder .gitconfig file at $HOME/.gitconfig"
    touch "$HOME/.gitconfig"
    echo ".gitconfig file created."
else
    echo ".gitconfig file already exists."
fi

echo "Setup complete."
