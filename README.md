# FunkinLauncher
An AIO tool for managing FNF installations.
[![Build status](https://ci.appveyor.com/api/projects/status/1o2pi06d47mj44pe?svg=true)](https://ci.appveyor.com/project/toperri/funkinlauncher)

# Credits
<table style="width:90%">
  <tr>
    <th><a href="https://www.errico.dev/?ref=flauncher">toperri</a></th>
    <th><a href="https://heroeyad.github.io/">HeroEyad</a></th>
    <th><a href="https://x.com/Sector03_">Sector03</a></th>
    <th><a href="https://x.com/Kacaro_">Kacaro</a></th>
  </tr>
  <tr>
    <td>
      <img src="art/toperri.png" alt="toperri" width="90" height="90">
    </td>
    <td>
       <img src="art/heroeyad.jpg" alt="HeroEyad" width="90" height="90">
    </td>
    <td>
       <img src="art/sector.png" alt="Sector03" width="90" height="90">
    </td>
    <td>
       <img src="art/kacaro.jpg" alt="Kacaro_" width="90" height="90">
    </td>
  </tr>
  <tr>
    <td>Programmer</td>
    <td>Programmer</td>
    <td>Artist</td>
    <td>Musician</td>
  </tr>
</table>
"Fuzzfreak" composed by ![Jukestar](https://jukestar.newgrounds.com/)
Special thanks to our playtesters Herox and SikeAir!

# How to run
<br>
<p align="center">
  <img src="https://github.com/user-attachments/assets/0ec16fcd-15a7-4b6c-93a0-67d4ecb1d92c" width="300">
</p>
<br>
Since this app is built with Electron, you will need to install <a href="https://nodejs.org/dist/v20.16.0/node-v20.16.0-x64.msi">Node.js</a> to run the app from source code. After that...
1) Use ``npm install --global yarn`` to install Yarn.
2) Use ``yarn install`` to install all dependencies required for the app to function.
3) You can now use ``yarn test`` to run the app (or use ``open.bat``)

# Building
1) Use ``npm install --global yarn`` to install Yarn.
2) Use ``yarn install`` to install all dependencies required for the app to function.
3) Use ``yarn build-win`` to build for Windows. [^1]
4) Funkin Launcher will be built into the ``/dist`` folder.
[^1]: Use ``yarn build-linux`` to build for Linux or ``yarn build-osx`` to build for Mac (you WILL need to edit the source code in order to support other OSes.)
# License
See [this link](https://gamebanana.com/tools/license/17526) for license.
