


### China, No Proxy

somethings as
```
scoop bucket add __
Checking repo... ERROR 'https://github.com/____' doesn't look like a valid git repository

Error given:
fatal: unable to access 'https://github.com/____': Failed to connect to github.com port 443 after 21104 ms: Timed out
```

well, try it
```
scoop config SCOOP_REPO 'https://gitee.com/glsnames/scoop-installer'
scoop update
```

