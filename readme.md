# Laravel Redis Socket.io Test


**.env**
```
BROADCAST_DRIVER=redis
QUEUE_DRIVER=redis
```

Server ve kuyruk dinleyiciyi başlatalım


    $ node server.js
    $ php artisan queue:work
    

İki ayrı tarayıcı açalım

Chrome

    http://test.local/alert
    
Firefox

    http://test.local/alert?m=Merhaba Dünya

Chrome'da *Merhaba Dünya* şeklide uyarıyı göreceksiniz.

Konu:
http://forum.laravel.gen.tr/viewtopic.php?id=2497