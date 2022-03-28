* to build dynamic library 
-fPIC option tells gcc to create position independant code which is necessary for shared libraries 

% gcc -c -fPIC libtest.c -o libtest.o
% gcc -shared -o libtest.so libtest.o