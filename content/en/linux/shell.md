---
title: The Shell
description: 'This wiki is meant to be the extended documentation for both end users and developers, so it is separated in those two categories.'
position: 23
category: Linux Concepts
---

Sometimes, you may want to interact with the operating system in a more direct way. A traditional way to do this is to do it through the shell.

The shell is a command line interface to the operating system. It is a program that wraps around the operating system kernel, and allows you to directly execute system calls and commands to interact with the operating system.

There are many various shells that are available on Linux, such as:

- The Bourne shell (sh)
- The Bourne-again shell (bash)
- The Korn shell (ksh)
- The Z shell (zsh)
- The Friendly Interactive Shell (fish)

Ultramarine Linux uses the [Z Shell](https://en.wikipedia.org/wiki/Z_shell) as its default shell, combined with the [Starship Prompt](https://starship.rs/) for a more clean interface.

The Z shell is also used Kali Linux and newer versions of macOS.


## Interacting with the shell

To start using the shell, open the Terminal app.

![The GNOME Terminal](/assets/terminal.png)

You will be greeted with a prompt, simply type in the command you want to execute, and press `Enter⏎`.

To change directories, type `cd` followed by the path you want to change to.

```zsh
cd /home/user/Documents
```

To list the contents of a directory, type `ls`.

To read a file to the terminal, type `cat` followed by the path to the file.

```zsh
cat /home/user/Documents/README.md
```

To delete a file, type `rm` followed by the path to the file.

```zsh
rm /home/user/Documents/README.md
```

To delete a full directory, recursively delete it by typing `rm -r` followed by the path to the directory.

```zsh
rm -r /home/user/Documents
```

<alert>

Most users will usually execute `rm -rf` instead of `rm -r`. The `-f` flag is used to force the deletion of a file or directory.

</alert>

To create a new file, type `touch` followed by the path to the file.

```zsh
touch /home/user/Documents/newfile.txt
```

To create a new directory, type `mkdir` followed by the path to the directory.

```zsh
mkdir /home/user/Documents/newdir
```

To move or rename a file or directory, type `mv` followed by the path to the file or directory, and then the new path.

```zsh
mv /home/user/Documents/newfile.txt /home/user/Documents/newfile2.txt
```

To know more about each command, open the manual by typing `man` followed by what you want to learn about

```
man sudo
```

This will open `less`, an app that allows you to read through long lines of text as a scrollable page.

To exit `less` press `Q`.

Most commands will also have a `-h` or `--help` flag, which tells you more about the command.

## The Pipeline

Linux offers a way for inter-process communication through pipes.

The pipeline you to transfer data from one process to another, and is used to execute commands in parallel.

```zsh
echo "Hello World" | wc -w
```

This calls the `wc` (word count) command, which counts the number of words in the text. Then pipes the output of `echo` to it, which then outputs the number of words. This is a very simple example of a pipeline.

A named pipe is created by using `>` instead of `|`.

```zsh
echo "Hello World" > pipe.txt
```

This pipes the output of `echo` to the named pipe `pipe.txt`, which is now a file.


## Executing a file

To execute a program, you must first make sure that the file is executable. This is done by using the `chmod` command.

```bash
chmod +x /path/to/exec
```

Then you can execute the file by directly pointing to it.

```bash
/path/to/exec
```

For files in your current folder, you must use `./` before the file name.

```bash
./exec
```