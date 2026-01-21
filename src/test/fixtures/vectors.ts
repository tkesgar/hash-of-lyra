// https://github.com/simonepri/phc-pbkdf2/blob/master/test/vectors.js
export const phcPBDKF2Vectors = [
  {
    "hash": "$pbkdf2-sha1$i=2$c2FsdA$6mwBTcctb4zNHtkqzh1B8NjeiVc",
    "password": "password"
  },
  {
    "hash": "$pbkdf2-sha1$i=4096$c2FsdA$SwB5AbdlSJq+rUnZJvch0GWkKcE",
    "password": "password"
  },
  {
    "hash": "$pbkdf2-sha1$i=16777216$c2FsdA$7v49Yc1NpOTplFs9a6IVjCY06YQ",
    "password": "password",
    slow: true,
  },
  {
    "hash": "$pbkdf2-sha1$i=4096$c2FsdFNBTFRzYWx0U0FMVHNhbHRTQUxUc2FsdFNBTFRzYWx0$PS7sT+QchJuAyNg2YsDkSospGpZM8vBwOA",
    "password": "passwordPASSWORDpassword"
  },
  {
    "hash": "$pbkdf2-sha1$i=4096$c2EAbHQ$Vvpqp1VICZ3MN9fwNCXgww",
    "password": "pass\u0000word"
  }
]

// https://github.com/simonepri/phc-scrypt/blob/master/test/vectors.js
export const phcScryptVectors = [
  {
    hash: "$scrypt$ln=4,r=1,p=1$$d9ZXYjhleyA7GcpCwYoEl/FrSETjB0ro39/6P+3iFEL80Aad7QlI+DJqdToPyB8X6NPg+y4NNijPNeIMONGJBg",
    password: "",
  },
  {
    hash: "$scrypt$ln=10,r=8,p=16$TmFDbA$/bq+HJ00cgB4VucZDQHp/nxq18vII3gw53N2Y0s3MWIurzDZLiKjiG/xCSedmDDaxyevuUqD7m2DYMvfoswGQA",
    password: "password",
  },
  {
    hash: "$scrypt$ln=14,r=8,p=1$U29kaXVtQ2hsb3JpZGU$cCO9yzr9c0hGHAbNgf046/2o+7qQT44+qbVD9lRdofLVQylVYT8Pz2LUlwUkKpr55h6F3A1lHkDfzwF7RVdYhw",
    password: "pleaseletmein",
  },
  {
    hash: "$scrypt$ln=20,r=8,p=1$U29kaXVtQ2hsb3JpZGU$IQHLm2pRGq6t274Jz3D4gexWjVdKL/1Nq+XumCCtqkeOVv2PS6XQn/ocbZJ8QPTDNzBASeipUvvL9Fxvp3pBpA",
    password: "pleaseletmein",
    slow: true,
    maxmem: 2048 * 1024 * 1024,
  },
]

export const testHash = [
  // Bun Argon2
  {
    "password": "password",
    "hash": "$argon2id$v=19$m=8,t=2,p=1$HsQU6lulMcoK9ekRybqHLuAo5ZqUacdvPcodb9kImF4$+nFuRtHEcL/RUkiJyqbecm4ZpLY7SoRnDwurcfeeAn0"
  },
  {
    "password": "password",
    "hash": "$argon2i$v=19$m=8,t=2,p=1$+7pUCQ4s2qkFSzm0CexQd22JYYBJkQ/UBwmsO7zj3m8$GBMU7ox/8xaMLx8LbgCmRYQujWZTMwi7g1QIN4CuGWw"
  },
  {
    "password": "password",
    "hash": "$argon2d$v=19$m=8,t=2,p=1$Tr1KWktZdlBk9sOlpSNPLOeVbhv7oxFaj0j9GkxAtgM$nhrR2Owquh/NqsORNiNXXwpLfnAWbW/A8nuwMowvMJI"
  },
  {
    "password": "pass\u0000word",
    "hash": "$argon2id$v=19$m=8,t=2,p=1$1HT8RWZ4gnvTQ5JPupyOQpGqaQ4T/wET6zgdfsxv5Ok$ZplMdJp+zjn7ByMHJ2YoPDKBPX8ZlS0F2JgWyWdMF2E"
  },
  {
    "password": "pass\u0000word",
    "hash": "$argon2i$v=19$m=8,t=2,p=1$q1HxM7Z8affvNjiapCAqSaQy+x/KBlbKmgLQKlSYaus$Q82HKddNlK4fOghFvUsIi85YGVlSfNytF5AvHso0jpE"
  },
  {
    "password": "pass\u0000word",
    "hash": "$argon2d$v=19$m=8,t=2,p=1$PSnjh4p9mYkbEkpmB65+/AAloipjVCuNLdZFudbaYU4$a/w8iQkLKI+bNyKzcUNCN4uVjpeOJm2RfbGJTuPY2PQ"
  },
  {
    "password": "pass\r\nword",
    "hash": "$argon2id$v=19$m=8,t=2,p=1$yyhgJ3jjfiCC3TO4wuN4XeF021kYvJ2F2oJ2byjxoYM$Ov0XmHfl6+glD0qHjLK0ei+Jd3G3lFWCRFbFlCCHpS8"
  },
  {
    "password": "pass\r\nword",
    "hash": "$argon2i$v=19$m=8,t=2,p=1$ExNN1zFpQzAlh7NZzYnqGHIzUIASJNQhyh0mXKmG69k$nZPoX4w1JEc3Qm6+wHk1Lt83TGjospzuKe3d0LN9kl8"
  },
  {
    "password": "pass\r\nword",
    "hash": "$argon2d$v=19$m=8,t=2,p=1$9EU9CHRG3mO8fddHuc+p7H+uzCYzDVKEBlCQah6qs84$rwhBi0hHteY7Utjo1GljyFtImR74EAExjH6Ys/c0sY8"
  },
  {
    "password": "耀嘉音",
    "hash": "$argon2id$v=19$m=8,t=2,p=1$JImqCRGysU3ZNpJSVZaHXfn+zGGNxneOsc0Eu3NecUA$wQnEOmajFvliv9/F5i3UzxyotsDLrjRjIwQxc+iRzCo"
  },
  {
    "password": "耀嘉音",
    "hash": "$argon2i$v=19$m=8,t=2,p=1$J1ryCga4UXzLcqya7nT+1neUS9iHEWlGbeAyCtym5XM$SkTt2lUOWjyzFUdwwIYnBZMSbu9SKaaXrY63tnbXfCk"
  },
  {
    "password": "耀嘉音",
    "hash": "$argon2d$v=19$m=8,t=2,p=1$oU9cv79bfLZ/QZb2hl+bE8BdD3VYzRYbeog1G8abP18$omylqsV1CuSOXLJtsriuVVc7AU5p3T6qg1zKLDmUN1o"
  },
  {
    "password": "🇮🇩🇮🇩🇮🇩",
    "hash": "$argon2id$v=19$m=8,t=2,p=1$1v2S4WPy+YY3zSqBgWz2XirhxQPod+NwL3SpjWTCWLA$mLX+NzOSUuUC1U4xLo+2JMQYJ8ApH6KhLMZDBid3URQ"
  },
  {
    "password": "🇮🇩🇮🇩🇮🇩",
    "hash": "$argon2i$v=19$m=8,t=2,p=1$Oblcfyq6sIkEXrVAJF0+jyrMahq38l40aMJFohVTr/E$/RqdJus9FJUgrfQT42gPkark3FWrqxx8HRJ/trY8VR4"
  },
  {
    "password": "🇮🇩🇮🇩🇮🇩",
    "hash": "$argon2d$v=19$m=8,t=2,p=1$XOOnNsYe9QrN1oFV8QAdGuPDuF4ghgeO/wLRQ5F/2kQ$OEYze9UlL0B6L4+LGD+NdwYerSw4KjGmvVwlBL6zzL8"
  },
  {
    "password": "btSo7CgT5mIt/ZqXn7enQsvaTlHLdD23YsIz0sJ9M64wN5VMbRjqW9qaGFkwxJLjO6wz2XwSQFhhY9urzlBbVXGWPmuMfmrgMlPr1BvKYR2tNKTnBgqXbU2XQF8yA7cZZJY9N0TqF7gD7bSv8ncOdXpEAQu7/5WTLRro6fIQAzh55vuCTFQkqf84tc7bdGRWzPDcXtNFrvU8QowFQTEliErIT8mvoZrotwda39vg3YKlSXpHWUtwvV344DyDWSWaNzMDXHKDqJRsJaVs4LpoyIU8WJyhLb1JjpaQh5uS54a2Bxv+JipZisd8F78UBTA74nwj4I8fjjgabZAPNdpssqIxSnhflAC5rwCEXxPA6uZuuHSXJLvq4Blsu4gqCf5x+6WB/ANgkoj5or+oMxMT/2AaPXmLIQqZB3bkJETLWPg7DmCrcnHkb+EbE9BBYvorieW0WEfjlMihasONSBut1NfO8dv45ZTAemDEBNVILmdyxgjd9KRFXO0mquH7ny+3WDsyIPN78xk+aZT4OqSgbX3n2EtErGq2NIwm7/y4qMi7RVuZxomD/t39iPXT2/ffYXwC2TQy1oqCuCwYC3TqJxD1skr2snfGmJ9MBgd7lvphiyc1QiRMCuAGmudsDJkYG5+7rjcdTMcYohSKn9LIs83M7C3Klm/68HpVXMp7v45ZHwOpU8mNmvN73hInmnx8LqIfCE6I8Ve5cCbpwuGtm2HE+3pY8e8IqosjMTYsR/0awDcLrC+ION5M26Jy9OAhXGTq0IT53Ss11KPRDx5tSSM+m0/afYbAozTUJmdT4cxcsNZ0BNG4z5aS7+lVXnpdwuUI3H5tsNN8/OAuvOgA1lVIh0o5XB/+OhK4xmXcsvGR1c2RWXZ4sqGIvC9gwFkqYa/7l8B7R8f5YAteOnir5JxC1c4XWQrfCUl0OsYZfFcok9soH3Akm1TgFQZLbtI+2NtiTkW6ftcIjuXK0yh0F3WDCm7aGGXBnFeMibm9/p/epvomXDFWAQuS/Xgn0Gxq",
    "hash": "$argon2id$v=19$m=8,t=2,p=1$uObRy7syejQt62bKSxJ9UHJx+eA8t1MWTvTodcyK4Fs$nHHnWZGDuXc1AkiHV/aRikw2QF3NihAwfs5gV4ZzEhM"
  },
  {
    "password": "btSo7CgT5mIt/ZqXn7enQsvaTlHLdD23YsIz0sJ9M64wN5VMbRjqW9qaGFkwxJLjO6wz2XwSQFhhY9urzlBbVXGWPmuMfmrgMlPr1BvKYR2tNKTnBgqXbU2XQF8yA7cZZJY9N0TqF7gD7bSv8ncOdXpEAQu7/5WTLRro6fIQAzh55vuCTFQkqf84tc7bdGRWzPDcXtNFrvU8QowFQTEliErIT8mvoZrotwda39vg3YKlSXpHWUtwvV344DyDWSWaNzMDXHKDqJRsJaVs4LpoyIU8WJyhLb1JjpaQh5uS54a2Bxv+JipZisd8F78UBTA74nwj4I8fjjgabZAPNdpssqIxSnhflAC5rwCEXxPA6uZuuHSXJLvq4Blsu4gqCf5x+6WB/ANgkoj5or+oMxMT/2AaPXmLIQqZB3bkJETLWPg7DmCrcnHkb+EbE9BBYvorieW0WEfjlMihasONSBut1NfO8dv45ZTAemDEBNVILmdyxgjd9KRFXO0mquH7ny+3WDsyIPN78xk+aZT4OqSgbX3n2EtErGq2NIwm7/y4qMi7RVuZxomD/t39iPXT2/ffYXwC2TQy1oqCuCwYC3TqJxD1skr2snfGmJ9MBgd7lvphiyc1QiRMCuAGmudsDJkYG5+7rjcdTMcYohSKn9LIs83M7C3Klm/68HpVXMp7v45ZHwOpU8mNmvN73hInmnx8LqIfCE6I8Ve5cCbpwuGtm2HE+3pY8e8IqosjMTYsR/0awDcLrC+ION5M26Jy9OAhXGTq0IT53Ss11KPRDx5tSSM+m0/afYbAozTUJmdT4cxcsNZ0BNG4z5aS7+lVXnpdwuUI3H5tsNN8/OAuvOgA1lVIh0o5XB/+OhK4xmXcsvGR1c2RWXZ4sqGIvC9gwFkqYa/7l8B7R8f5YAteOnir5JxC1c4XWQrfCUl0OsYZfFcok9soH3Akm1TgFQZLbtI+2NtiTkW6ftcIjuXK0yh0F3WDCm7aGGXBnFeMibm9/p/epvomXDFWAQuS/Xgn0Gxq",
    "hash": "$argon2i$v=19$m=8,t=2,p=1$4oZqfOUvVjKXAABX4D2Hqga66KiGPWI5chldGkuGSwo$D6Eje+A1tBdBGwNzDcwX+SJeRLzTxb1XkEIty70+dc4"
  },
  {
    "password": "btSo7CgT5mIt/ZqXn7enQsvaTlHLdD23YsIz0sJ9M64wN5VMbRjqW9qaGFkwxJLjO6wz2XwSQFhhY9urzlBbVXGWPmuMfmrgMlPr1BvKYR2tNKTnBgqXbU2XQF8yA7cZZJY9N0TqF7gD7bSv8ncOdXpEAQu7/5WTLRro6fIQAzh55vuCTFQkqf84tc7bdGRWzPDcXtNFrvU8QowFQTEliErIT8mvoZrotwda39vg3YKlSXpHWUtwvV344DyDWSWaNzMDXHKDqJRsJaVs4LpoyIU8WJyhLb1JjpaQh5uS54a2Bxv+JipZisd8F78UBTA74nwj4I8fjjgabZAPNdpssqIxSnhflAC5rwCEXxPA6uZuuHSXJLvq4Blsu4gqCf5x+6WB/ANgkoj5or+oMxMT/2AaPXmLIQqZB3bkJETLWPg7DmCrcnHkb+EbE9BBYvorieW0WEfjlMihasONSBut1NfO8dv45ZTAemDEBNVILmdyxgjd9KRFXO0mquH7ny+3WDsyIPN78xk+aZT4OqSgbX3n2EtErGq2NIwm7/y4qMi7RVuZxomD/t39iPXT2/ffYXwC2TQy1oqCuCwYC3TqJxD1skr2snfGmJ9MBgd7lvphiyc1QiRMCuAGmudsDJkYG5+7rjcdTMcYohSKn9LIs83M7C3Klm/68HpVXMp7v45ZHwOpU8mNmvN73hInmnx8LqIfCE6I8Ve5cCbpwuGtm2HE+3pY8e8IqosjMTYsR/0awDcLrC+ION5M26Jy9OAhXGTq0IT53Ss11KPRDx5tSSM+m0/afYbAozTUJmdT4cxcsNZ0BNG4z5aS7+lVXnpdwuUI3H5tsNN8/OAuvOgA1lVIh0o5XB/+OhK4xmXcsvGR1c2RWXZ4sqGIvC9gwFkqYa/7l8B7R8f5YAteOnir5JxC1c4XWQrfCUl0OsYZfFcok9soH3Akm1TgFQZLbtI+2NtiTkW6ftcIjuXK0yh0F3WDCm7aGGXBnFeMibm9/p/epvomXDFWAQuS/Xgn0Gxq",
    "hash": "$argon2d$v=19$m=8,t=2,p=1$H3K807TvU3w7nXvhkxt2LNppseBlpwjX6ZQG5Oo3zuY$DKep5b8k/FHIVakhzmrpMRAGPQ2zlXwJhowd4elsclg"
  },
  // PHC Argon2
  // PHC PBKDF2
  // Zig Argon2
  // Zig Scrypt
]
