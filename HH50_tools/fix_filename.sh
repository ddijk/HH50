# replace quotes and spaces in file names
find . -name "*" -type f | grep -v '.DS_Store' | grep -v 'index.html' | grep -v generate_html.sh | grep -v gen2.sh | while read line; do
     mv "$line" `echo $line | sed "s/[\' ]/_/g"`
done
