#!/bin/bash
cd "$(dirname "$0")"
echo "Pushing to GitHub..."
git push origin main
echo "Done!"
