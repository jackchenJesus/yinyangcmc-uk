@echo off
cd /d "%~dp0"
echo.
echo === Yin Yang CMC — Build and Deploy ===
echo.
call npm run build
if %errorlevel% neq 0 (
  echo BUILD FAILED
  pause
  exit /b 1
)
echo.
echo Build complete. Deploying to Cloudflare...
echo.
call npx wrangler deploy
if %errorlevel% neq 0 (
  echo DEPLOY FAILED
  pause
  exit /b 1
)
echo.
echo === Deploy complete ===
pause
