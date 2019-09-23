#!/bin/bash
echo "<html>"
echo "<head>"
echo "<script type='text/javascript' src='sort.js' >"
echo "</script>"
echo "<link rel='stylesheet' href='style.css'>"
echo "</head>"
echo "<body onload=go()>"
echo "<h1>H en H 50</h1>"
 for f in $(find . -name "*" -type f | grep -v '\.css' | grep -v '.DS_Store' | grep -v "index.*.html" | grep -v '\.sh' | grep -v '\.4mv' | grep -v '\.m4v' | grep -v '\.js');  do
	echo  "<img width='1000' src='$f'>"
done
echo "</body>"
echo "</html>" 
