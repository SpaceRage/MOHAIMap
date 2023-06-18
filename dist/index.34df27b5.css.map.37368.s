{"mappings":";AAWA;;;;;AASA;;;;AAcA;;;;;;;;;AAeA;;;;;AAWA;;;;;;AAUA;;;;;AAQA;;;;;AAcA;;;;;;AASA;;;;AAUA;;;;;AAYA;;;;AAQA;;;;;;;AAQA;;;;AAIA;;;;AAUA;;;;;;AAYA;;;;;;;;;;AAkBA;;;;AAUA;;;;;;AAaA;;;;AAQA;;;;AAQA;;;;AAQA;;;;AAUA;;;;;AASA;;;;AASA;;;;;AASA;;;;AAQA;;;;AAgBA;;;;;AAKA;;;;AAIA;;;;;;AAYA;;;;AASA;;;;;AAUA;;;;AASA;;;;AAUA;;;;;AAgBA;;;;;AAQA;;;;AAIA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoGA;;;;AAIA;;;;AAIA;;;;;AAKA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;;AAKA;;;;;AAKA;;;;;AAKA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;;;AAMA;;;;;;AAMA;;;;;;AAMA;;;;;;AAMA;;;;AAIA;;;;AAIA;;;;;AAKA;;;;;AAKA;;;;;AAKA;;;;;AAKA;;;;;AAKA;;;;;AAKA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;AAIA;;;;;AAKA;;;;;AAKA;;;;;AAKA;;;;;AAKA;;;;;AAKA;;;;;AAKA;;;;AAIA;;;;AAIA;;;;;AAKA;;;;;AAKA;;;;AAIA;;;;;AAKA;;;;;;AAKA;;;;;;AAKA;;;;AAIA;;;;;;AAgBA;;;;;;AAgBA;;;;;AAOA;;;;AAQA;;;;;;;;;;;AAYA;;;;;;;;;;;;AAaA;;;;AAIA;;;;;;AAMA;;;;;;AAOA;;;;;;AAMA;;;;;;;;;;;;;AAaA;;;;;;;;;;;;AAcA;;;;;AAKA;;;;;AAKA;;;;;AAKA;;;;;AAKA;;;;AAIA;;;;AAIA;;;;;AAKA;;;;;AAKA;EAEE;;;;EAIA;;;;;EAKA","sources":["src/css/main.css"],"sourcesContent":["@import url(\"https://use.typekit.net/agf6kct.css\");\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n\n\n#map {\n    height: 100vh;\n}\n\n#settings {\n    left: -45%;\n    transition: left 0.25s ease, color 0.25s ease, background-color 0.25s ease;\n    -webkit-transition: left 0.25s ease,\n        color 0.25s ease,\n        background-color 0.25s ease;\n    -moz-transition: left 0.25s ease,\n        color 0.25s ease,\n        background-color 0.25s ease;\n    -o-transition: left 0.25s ease,\n        color 0.25s ease,\n        background-color 0.25s ease;\n    /*transition: color 0.25s ease;\n    transition: background-color 0.25s ease;*/\n}\n\n#layers {\n    right: -45%;\n    transition: right 0.25s ease, color 0.25s ease, background-color 0.25s ease;\n    -webkit-transition: right 0.25s ease,\n        color 0.25s ease,\n        background-color 0.25s ease;\n    -moz-transition: right 0.25s ease,\n        color 0.25s ease,\n        background-color 0.25s ease;\n    -o-transition: right 0.25s ease,\n        color 0.25s ease,\n        background-color 0.25s ease;\n    /*transition: color 0.25s ease;\n    transition: background-color 0.25s ease;*/\n}\n\n#infopanel {\n    transition: bottom 0.25s ease;\n    -webkit-transition: bottom 0.25s ease;\n    -moz-transition: bottom 0.25s ease;\n    -o-transition: bottom 0.25s ease;\n}\n\n\n#settings:hover {\n    cursor: pointer;\n}\n\n#layers:hover {\n    cursor: pointer;\n}\n\n.leaflet-tooltip.my-labels {\n    background-color: rgb(0, 0, 0, 0.8);\n    color: white;\n    border: transparent;\n    box-shadow: none;\n    border-width: 40px;\n    font-family: \"news-gothic-std\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    border-radius: 5px;\n}\n\n.leaflet-tooltip.my-labels-two {\n    background-color: rgb(0, 0, 0, 0);\n    color: white;\n    border: transparent;\n    box-shadow: none;\n    border-width: 40px;\n    font-family: \"news-gothic-std\", sans-serif;\n    font-weight: 400;\n    font-size: 18px;\n    font-style: normal;\n    border-radius: 5px;\n}\n\n#abouttab:active {\n    background-color: white;\n}\n\nh1 {\n    font-family: \"bebas-neue-pro\", sans-serif;\n    font-weight: 600;\n    font-style: normal;\n}\n\np,\nli {\n    font-family: \"news-gothic-std\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n\ninput[type=checkbox] {\n    margin: 5px;\n    position: relative;\n    cursor: pointer;\n}\n\ninput[type=checkbox]:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 16px;\n    height: 16px;\n    top: -25%;\n    left: 0;\n    border: 2px solid #555555;\n    border-radius: 3px;\n    background-color: white;\n}\n\ninput[type=checkbox]:checked:after {\n    content: \"\";\n    display: block;\n    width: 5px;\n    height: 10px;\n    border: solid black;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    position: absolute;\n    left: 6px;\n}"],"names":[],"version":3,"file":"index.34df27b5.css.map","sourceRoot":"/__parcel_source_root/"}