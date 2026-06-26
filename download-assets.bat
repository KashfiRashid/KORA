@echo off
REM === KORA image downloader ===
REM Double-click this file. It saves all generated images into the assets folder
REM so the website loads them locally instead of from Higgsfield's web link.

cd /d "%~dp0"
if not exist "assets" mkdir "assets"
cd "assets"

echo Downloading KORA images into the assets folder...
echo.

curl -L -o "img-fabric-still.png"  "https://d8j0ntlcm91z4.cloudfront.net/user_3DcErwmz47VWbAEtsXCz0f5MevI/hf_20260626_074640_ec115384-4a26-47b6-a749-288c7043d81b.png"
curl -L -o "img-fabric-macro.png"  "https://d8j0ntlcm91z4.cloudfront.net/user_3DcErwmz47VWbAEtsXCz0f5MevI/hf_20260626_075004_ed1d3ed7-52ac-445a-9d66-921e23828bf4.png"
curl -L -o "img-origin-hands.png"  "https://d8j0ntlcm91z4.cloudfront.net/user_3DcErwmz47VWbAEtsXCz0f5MevI/hf_20260626_075154_d2c5d4e3-de9e-4ec6-b476-19518402f03f.png"
curl -L -o "img-lifestyle.png"     "https://d8j0ntlcm91z4.cloudfront.net/user_3DcErwmz47VWbAEtsXCz0f5MevI/hf_20260626_075117_43f1c040-6fae-4e29-95b9-9c13156bfa98.png"
curl -L -o "img-tee.png"           "https://d8j0ntlcm91z4.cloudfront.net/user_3DcErwmz47VWbAEtsXCz0f5MevI/hf_20260626_135539_90645a0d-5b11-4eb9-95ec-638eae31113c.png"
curl -L -o "img-heritage-crew.png" "https://d8j0ntlcm91z4.cloudfront.net/user_3DcErwmz47VWbAEtsXCz0f5MevI/hf_20260626_135639_edf9fa0a-88ee-40af-b720-1507105c4352.png"
curl -L -o "img-carry-tank.png"    "https://d8j0ntlcm91z4.cloudfront.net/user_3DcErwmz47VWbAEtsXCz0f5MevI/hf_20260626_135716_4931daa4-e4bb-40c4-a93a-c7c9ff593ac6.png"
curl -L -o "img-field-jogger.png"  "https://d8j0ntlcm91z4.cloudfront.net/user_3DcErwmz47VWbAEtsXCz0f5MevI/hf_20260626_135751_f285e961-f29b-4a3c-864d-e6724fdd6991.png"

echo.
echo Done. Files saved in the assets folder. You can close this window.
pause
