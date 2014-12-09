SVG_NAME="out.svg"
PNG_NAME="out.png"

cat svg-doctype.xml > "$SVG_NAME"      # DOCTYPE declaration
./render-svg-content.js >> "$SVG_NAME" # Actual SVG contents

inkscape -z -e "$PNG_NAME" "$SVG_NAME"
