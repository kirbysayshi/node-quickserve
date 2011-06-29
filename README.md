
# node-quickserve

node-quickserve is a super simple command line utility that allows you to init a static file server, powered by connect, in one command. It is not meant for any type of long running process, more for when you quickly need to serve a directory, and don't want to mess around with Apache, XAMPP, nginx, virtual hosts, etc.

It supports displaying both files and directories, because it uses connect's static and directory middlewares.

## INSTALL

    npm install quickserve -g

While you could install non-globally, it doesn't really make sense, as there is nothing to require().

## USAGE

    quickserve [path=.] [port=1234]

Both path and port are optional, and default to the current working directory and port 1234, respectively.

## EXAMPLE

    $ cd ~/Projects/my-project
    $ quickserve
    serving /Users/drew/Projects/my-project at: http://localhost:1234

    $ quickserve /var/www 9000
    serving /var/www at: http://localhost:9000

Press CTRL + C to stop the server.

## WHY

What about [paperserve](https://github.com/StanAngeloff/node-paperserve)? I discovered this in the middle of making this script, and while it works, it doesn't use connect's nice-looking directory listing.

VISUALS ARE IMPORTANT :)

Plus, it's awesome to write a readme that is longer than the actual script.

## LICENSE

MIT