' Lanzador de Mesana
' Abre el sistema sin mostrar ventana negra de CMD
Dim oShell, sDir
Set oShell = CreateObject("WScript.Shell")
sDir = Left(WScript.ScriptFullName, InStrRev(WScript.ScriptFullName, "\"))
oShell.CurrentDirectory = sDir
oShell.Run "cmd /c ""Abrir Mesana.cmd""", 0, False
Set oShell = Nothing
