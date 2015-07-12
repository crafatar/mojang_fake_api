# Mojang Fake API

An ultra simple web server that fakes Mojang's API for sessions, skins, and textures.

The request path must be one of:

0. `/session/minecraft/profile/<uuid>`
0. `/MinecraftSkins/<name>`
0. `/texture/<hash>`

The server always returns Notch's session or skin.
Cloaks are not supported.