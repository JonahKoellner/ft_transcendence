import platform
import subprocess

def main():
    os_name = platform.system()
    
    if os_name == "Linux" or os_name == "Darwin":  # macOS is recognized as "Darwin"
        script_path = "./setup-dev-env.sh"
        # Make the script executable and run it
        subprocess.run(["chmod", "+x", script_path], check=True)
        subprocess.run([script_path], check=True)
    elif os_name == "Windows":
        script_path = ".\\setup-dev-env.ps1"
        # Run the PowerShell script
        subprocess.run(["powershell", "-ExecutionPolicy", "Bypass", "-File", script_path], check=True)
    else:
        print(f"Unsupported operating system: {os_name}")

if __name__ == "__main__":
    main()
    #test
