#/bin/bash
if [ -z "$1" ]; then
   echo "Missing first arg: jaar";
   exit 1;
fi
jaar=$1;
echo "Using jaar is $jaar";

for i in 2007*.JPG *.jpg ; do 
  echo "Processing: $i, rename to ${jaar}_$i" ;
  mv "$i" "${jaar}_$i";
done
