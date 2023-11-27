#!/bin/bash

# Get the Python script name from the environment variable
main.py=$PYFILE

# Check if the Python script file exists
if [[ ! -f "$main.py" ]]; then
  echo "Error: Python script file $python_script_name does not exist"
  exit 1
fi

# Run the Python script
python "$main.py"
