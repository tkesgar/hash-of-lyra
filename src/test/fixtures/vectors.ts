// https://github.com/simonepri/phc-pbkdf2/blob/master/test/vectors.js
export const phcPBDKF2Vectors = [
  {
    hash: "$pbkdf2-sha1$i=2$c2FsdA$6mwBTcctb4zNHtkqzh1B8NjeiVc",
    password: "password",
  },
  {
    hash: "$pbkdf2-sha1$i=4096$c2FsdA$SwB5AbdlSJq+rUnZJvch0GWkKcE",
    password: "password",
  },
  {
    hash: "$pbkdf2-sha1$i=16777216$c2FsdA$7v49Yc1NpOTplFs9a6IVjCY06YQ",
    password: "password",
    slow: true,
  },
  {
    hash: "$pbkdf2-sha1$i=4096$c2FsdFNBTFRzYWx0U0FMVHNhbHRTQUxUc2FsdFNBTFRzYWx0$PS7sT+QchJuAyNg2YsDkSospGpZM8vBwOA",
    password: "passwordPASSWORDpassword",
  },
  {
    hash: "$pbkdf2-sha1$i=4096$c2EAbHQ$Vvpqp1VICZ3MN9fwNCXgww",
    password: "pass\u0000word",
  },
];

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
];

export const testHashArgon2 = [
  {
    password: "password",
    hash: "$argon2id$v=19$m=8,t=2,p=1$HsQU6lulMcoK9ekRybqHLuAo5ZqUacdvPcodb9kImF4$+nFuRtHEcL/RUkiJyqbecm4ZpLY7SoRnDwurcfeeAn0",
  },
  {
    password: "password",
    hash: "$argon2i$v=19$m=8,t=2,p=1$+7pUCQ4s2qkFSzm0CexQd22JYYBJkQ/UBwmsO7zj3m8$GBMU7ox/8xaMLx8LbgCmRYQujWZTMwi7g1QIN4CuGWw",
  },
  {
    password: "password",
    hash: "$argon2d$v=19$m=8,t=2,p=1$Tr1KWktZdlBk9sOlpSNPLOeVbhv7oxFaj0j9GkxAtgM$nhrR2Owquh/NqsORNiNXXwpLfnAWbW/A8nuwMowvMJI",
  },
  {
    password: "pass\u0000word",
    hash: "$argon2id$v=19$m=8,t=2,p=1$1HT8RWZ4gnvTQ5JPupyOQpGqaQ4T/wET6zgdfsxv5Ok$ZplMdJp+zjn7ByMHJ2YoPDKBPX8ZlS0F2JgWyWdMF2E",
  },
  {
    password: "pass\u0000word",
    hash: "$argon2i$v=19$m=8,t=2,p=1$q1HxM7Z8affvNjiapCAqSaQy+x/KBlbKmgLQKlSYaus$Q82HKddNlK4fOghFvUsIi85YGVlSfNytF5AvHso0jpE",
  },
  {
    password: "pass\u0000word",
    hash: "$argon2d$v=19$m=8,t=2,p=1$PSnjh4p9mYkbEkpmB65+/AAloipjVCuNLdZFudbaYU4$a/w8iQkLKI+bNyKzcUNCN4uVjpeOJm2RfbGJTuPY2PQ",
  },
  {
    password: "pass\r\nword",
    hash: "$argon2id$v=19$m=8,t=2,p=1$yyhgJ3jjfiCC3TO4wuN4XeF021kYvJ2F2oJ2byjxoYM$Ov0XmHfl6+glD0qHjLK0ei+Jd3G3lFWCRFbFlCCHpS8",
  },
  {
    password: "pass\r\nword",
    hash: "$argon2i$v=19$m=8,t=2,p=1$ExNN1zFpQzAlh7NZzYnqGHIzUIASJNQhyh0mXKmG69k$nZPoX4w1JEc3Qm6+wHk1Lt83TGjospzuKe3d0LN9kl8",
  },
  {
    password: "pass\r\nword",
    hash: "$argon2d$v=19$m=8,t=2,p=1$9EU9CHRG3mO8fddHuc+p7H+uzCYzDVKEBlCQah6qs84$rwhBi0hHteY7Utjo1GljyFtImR74EAExjH6Ys/c0sY8",
  },
  {
    password: "耀嘉音",
    hash: "$argon2id$v=19$m=8,t=2,p=1$JImqCRGysU3ZNpJSVZaHXfn+zGGNxneOsc0Eu3NecUA$wQnEOmajFvliv9/F5i3UzxyotsDLrjRjIwQxc+iRzCo",
  },
  {
    password: "耀嘉音",
    hash: "$argon2i$v=19$m=8,t=2,p=1$J1ryCga4UXzLcqya7nT+1neUS9iHEWlGbeAyCtym5XM$SkTt2lUOWjyzFUdwwIYnBZMSbu9SKaaXrY63tnbXfCk",
  },
  {
    password: "耀嘉音",
    hash: "$argon2d$v=19$m=8,t=2,p=1$oU9cv79bfLZ/QZb2hl+bE8BdD3VYzRYbeog1G8abP18$omylqsV1CuSOXLJtsriuVVc7AU5p3T6qg1zKLDmUN1o",
  },
  {
    password: "🇮🇩🇮🇩🇮🇩",
    hash: "$argon2id$v=19$m=8,t=2,p=1$1v2S4WPy+YY3zSqBgWz2XirhxQPod+NwL3SpjWTCWLA$mLX+NzOSUuUC1U4xLo+2JMQYJ8ApH6KhLMZDBid3URQ",
  },
  {
    password: "🇮🇩🇮🇩🇮🇩",
    hash: "$argon2i$v=19$m=8,t=2,p=1$Oblcfyq6sIkEXrVAJF0+jyrMahq38l40aMJFohVTr/E$/RqdJus9FJUgrfQT42gPkark3FWrqxx8HRJ/trY8VR4",
  },
  {
    password: "🇮🇩🇮🇩🇮🇩",
    hash: "$argon2d$v=19$m=8,t=2,p=1$XOOnNsYe9QrN1oFV8QAdGuPDuF4ghgeO/wLRQ5F/2kQ$OEYze9UlL0B6L4+LGD+NdwYerSw4KjGmvVwlBL6zzL8",
  },
  {
    password:
      "btSo7CgT5mIt/ZqXn7enQsvaTlHLdD23YsIz0sJ9M64wN5VMbRjqW9qaGFkwxJLjO6wz2XwSQFhhY9urzlBbVXGWPmuMfmrgMlPr1BvKYR2tNKTnBgqXbU2XQF8yA7cZZJY9N0TqF7gD7bSv8ncOdXpEAQu7/5WTLRro6fIQAzh55vuCTFQkqf84tc7bdGRWzPDcXtNFrvU8QowFQTEliErIT8mvoZrotwda39vg3YKlSXpHWUtwvV344DyDWSWaNzMDXHKDqJRsJaVs4LpoyIU8WJyhLb1JjpaQh5uS54a2Bxv+JipZisd8F78UBTA74nwj4I8fjjgabZAPNdpssqIxSnhflAC5rwCEXxPA6uZuuHSXJLvq4Blsu4gqCf5x+6WB/ANgkoj5or+oMxMT/2AaPXmLIQqZB3bkJETLWPg7DmCrcnHkb+EbE9BBYvorieW0WEfjlMihasONSBut1NfO8dv45ZTAemDEBNVILmdyxgjd9KRFXO0mquH7ny+3WDsyIPN78xk+aZT4OqSgbX3n2EtErGq2NIwm7/y4qMi7RVuZxomD/t39iPXT2/ffYXwC2TQy1oqCuCwYC3TqJxD1skr2snfGmJ9MBgd7lvphiyc1QiRMCuAGmudsDJkYG5+7rjcdTMcYohSKn9LIs83M7C3Klm/68HpVXMp7v45ZHwOpU8mNmvN73hInmnx8LqIfCE6I8Ve5cCbpwuGtm2HE+3pY8e8IqosjMTYsR/0awDcLrC+ION5M26Jy9OAhXGTq0IT53Ss11KPRDx5tSSM+m0/afYbAozTUJmdT4cxcsNZ0BNG4z5aS7+lVXnpdwuUI3H5tsNN8/OAuvOgA1lVIh0o5XB/+OhK4xmXcsvGR1c2RWXZ4sqGIvC9gwFkqYa/7l8B7R8f5YAteOnir5JxC1c4XWQrfCUl0OsYZfFcok9soH3Akm1TgFQZLbtI+2NtiTkW6ftcIjuXK0yh0F3WDCm7aGGXBnFeMibm9/p/epvomXDFWAQuS/Xgn0Gxq",
    hash: "$argon2id$v=19$m=8,t=2,p=1$uObRy7syejQt62bKSxJ9UHJx+eA8t1MWTvTodcyK4Fs$nHHnWZGDuXc1AkiHV/aRikw2QF3NihAwfs5gV4ZzEhM",
  },
  {
    password:
      "btSo7CgT5mIt/ZqXn7enQsvaTlHLdD23YsIz0sJ9M64wN5VMbRjqW9qaGFkwxJLjO6wz2XwSQFhhY9urzlBbVXGWPmuMfmrgMlPr1BvKYR2tNKTnBgqXbU2XQF8yA7cZZJY9N0TqF7gD7bSv8ncOdXpEAQu7/5WTLRro6fIQAzh55vuCTFQkqf84tc7bdGRWzPDcXtNFrvU8QowFQTEliErIT8mvoZrotwda39vg3YKlSXpHWUtwvV344DyDWSWaNzMDXHKDqJRsJaVs4LpoyIU8WJyhLb1JjpaQh5uS54a2Bxv+JipZisd8F78UBTA74nwj4I8fjjgabZAPNdpssqIxSnhflAC5rwCEXxPA6uZuuHSXJLvq4Blsu4gqCf5x+6WB/ANgkoj5or+oMxMT/2AaPXmLIQqZB3bkJETLWPg7DmCrcnHkb+EbE9BBYvorieW0WEfjlMihasONSBut1NfO8dv45ZTAemDEBNVILmdyxgjd9KRFXO0mquH7ny+3WDsyIPN78xk+aZT4OqSgbX3n2EtErGq2NIwm7/y4qMi7RVuZxomD/t39iPXT2/ffYXwC2TQy1oqCuCwYC3TqJxD1skr2snfGmJ9MBgd7lvphiyc1QiRMCuAGmudsDJkYG5+7rjcdTMcYohSKn9LIs83M7C3Klm/68HpVXMp7v45ZHwOpU8mNmvN73hInmnx8LqIfCE6I8Ve5cCbpwuGtm2HE+3pY8e8IqosjMTYsR/0awDcLrC+ION5M26Jy9OAhXGTq0IT53Ss11KPRDx5tSSM+m0/afYbAozTUJmdT4cxcsNZ0BNG4z5aS7+lVXnpdwuUI3H5tsNN8/OAuvOgA1lVIh0o5XB/+OhK4xmXcsvGR1c2RWXZ4sqGIvC9gwFkqYa/7l8B7R8f5YAteOnir5JxC1c4XWQrfCUl0OsYZfFcok9soH3Akm1TgFQZLbtI+2NtiTkW6ftcIjuXK0yh0F3WDCm7aGGXBnFeMibm9/p/epvomXDFWAQuS/Xgn0Gxq",
    hash: "$argon2i$v=19$m=8,t=2,p=1$4oZqfOUvVjKXAABX4D2Hqga66KiGPWI5chldGkuGSwo$D6Eje+A1tBdBGwNzDcwX+SJeRLzTxb1XkEIty70+dc4",
  },
  {
    password:
      "btSo7CgT5mIt/ZqXn7enQsvaTlHLdD23YsIz0sJ9M64wN5VMbRjqW9qaGFkwxJLjO6wz2XwSQFhhY9urzlBbVXGWPmuMfmrgMlPr1BvKYR2tNKTnBgqXbU2XQF8yA7cZZJY9N0TqF7gD7bSv8ncOdXpEAQu7/5WTLRro6fIQAzh55vuCTFQkqf84tc7bdGRWzPDcXtNFrvU8QowFQTEliErIT8mvoZrotwda39vg3YKlSXpHWUtwvV344DyDWSWaNzMDXHKDqJRsJaVs4LpoyIU8WJyhLb1JjpaQh5uS54a2Bxv+JipZisd8F78UBTA74nwj4I8fjjgabZAPNdpssqIxSnhflAC5rwCEXxPA6uZuuHSXJLvq4Blsu4gqCf5x+6WB/ANgkoj5or+oMxMT/2AaPXmLIQqZB3bkJETLWPg7DmCrcnHkb+EbE9BBYvorieW0WEfjlMihasONSBut1NfO8dv45ZTAemDEBNVILmdyxgjd9KRFXO0mquH7ny+3WDsyIPN78xk+aZT4OqSgbX3n2EtErGq2NIwm7/y4qMi7RVuZxomD/t39iPXT2/ffYXwC2TQy1oqCuCwYC3TqJxD1skr2snfGmJ9MBgd7lvphiyc1QiRMCuAGmudsDJkYG5+7rjcdTMcYohSKn9LIs83M7C3Klm/68HpVXMp7v45ZHwOpU8mNmvN73hInmnx8LqIfCE6I8Ve5cCbpwuGtm2HE+3pY8e8IqosjMTYsR/0awDcLrC+ION5M26Jy9OAhXGTq0IT53Ss11KPRDx5tSSM+m0/afYbAozTUJmdT4cxcsNZ0BNG4z5aS7+lVXnpdwuUI3H5tsNN8/OAuvOgA1lVIh0o5XB/+OhK4xmXcsvGR1c2RWXZ4sqGIvC9gwFkqYa/7l8B7R8f5YAteOnir5JxC1c4XWQrfCUl0OsYZfFcok9soH3Akm1TgFQZLbtI+2NtiTkW6ftcIjuXK0yh0F3WDCm7aGGXBnFeMibm9/p/epvomXDFWAQuS/Xgn0Gxq",
    hash: "$argon2d$v=19$m=8,t=2,p=1$H3K807TvU3w7nXvhkxt2LNppseBlpwjX6ZQG5Oo3zuY$DKep5b8k/FHIVakhzmrpMRAGPQ2zlXwJhowd4elsclg",
  },
];

export const testHashPBKDF2 = [
  {
    password: "password",
    hash: "$pbkdf2-sha1$i=10$uzAf0J3FrnByHABtfskp0w$tEi1yVZx1OYWJAWqaizwp3P85d8",
  },
  {
    password: "password",
    hash: "$pbkdf2-sha256$i=10$7rC6se/nA9h1IhyNcG/2/g$amLCQjwvYvfF7vO3x9OThyHu+PX0swt2/K1r0vDyXUU",
  },
  {
    password: "password",
    hash: "$pbkdf2-sha512$i=10$X228cwjdyPHXwC62XHncSQ$EzXgq68DaygtMfjBNaHKp3X+uAOGSnrquBbm5zM7nHgHHufbUQK0NO8OZ+UK0Wvlydl719JQx75vE20otJnhsQ",
  },
  {
    password: "pass\u0000word",
    hash: "$pbkdf2-sha1$i=10$+17wcKmU6pTj0XgvloQojg$qqOhQNWI8tXmNk/K1P4XRWXsmL4",
  },
  {
    password: "pass\u0000word",
    hash: "$pbkdf2-sha256$i=10$hP3Rt/Qw4VvHqxZLckDl6w$TxgyKfu1QYUuoP5s4WcKhPtzewZNSkUEJjNJHp3/Zmg",
  },
  {
    password: "pass\u0000word",
    hash: "$pbkdf2-sha512$i=10$zUl3CoHK3qzS9R7usOMo/A$4ml5P0HnPbSyL4y5q73ub7u5+3wt6VLK+3dJD16spAEU0We7RGv41/H2L+WSYvj6DQW+jDn/c7ibVH33PdzBRA",
  },
  {
    password: "pass\r\nword",
    hash: "$pbkdf2-sha1$i=10$B8eHkTaojjQLA00iM4NxDQ$CA8M7cuZn3XAYgFb7jsOE6t/ITc",
  },
  {
    password: "pass\r\nword",
    hash: "$pbkdf2-sha256$i=10$c5pB+BMhSUGzX43UcUU8cQ$lpTvpbgqdULmvKBkKh7VeM/bSEARFkYnxjw7xNQTO8k",
  },
  {
    password: "pass\r\nword",
    hash: "$pbkdf2-sha512$i=10$sRxz+wrXiUTrekYDD6MQWA$XSMFyGxLcvTe6dt1KiQMrNoS7IJA9U8ZfHIZTlW+6lo1I0ypGm/UwqMVQJ9iRYPEoTd4ZYoLdOfUEa4VJvq+ng",
  },
  {
    password: "耀嘉音",
    hash: "$pbkdf2-sha1$i=10$mQ8lOny3k6bXGbO+jzmdbQ$epl7iTY4Cy2LitrldQx7l9laPS8",
  },
  {
    password: "耀嘉音",
    hash: "$pbkdf2-sha256$i=10$NAf+bmjkBgxtcySd96Rp2w$ChXi1AwE9Bsa7Pg855neJapD5psr698MoK/CeS6lE3k",
  },
  {
    password: "耀嘉音",
    hash: "$pbkdf2-sha512$i=10$7fGek6ddKcQ4ThJ+nI7usA$WJVnDMvf0thyTcL3n3Mq3jN/rWfuj5Us5qs8ztxFX1TaqAr38WE91woZtnFZ39nDJk9XVNJm1e+Icly8use2IA",
  },
  {
    password: "🇮🇩🇮🇩🇮🇩",
    hash: "$pbkdf2-sha1$i=10$nLjc/f0FFPfe98lghACa9g$7MrtdYQdbZMtrwjAkLnetbCKc8Y",
  },
  {
    password: "🇮🇩🇮🇩🇮🇩",
    hash: "$pbkdf2-sha256$i=10$TPjwQepFr1p4yFzRacBc7Q$1yrlrUllFbF7nlbv9uzPv5sfQoE//e7+71fUIbhP/18",
  },
  {
    password: "🇮🇩🇮🇩🇮🇩",
    hash: "$pbkdf2-sha512$i=10$GUtzv1YVnG4mDXakZxussA$OcihFS+mgFqzuKgvQQL8VlO4ZCXmwwq5WST1ERGYSTaTd7rKZl8geaCiAw4mxRbTCTdpexwuponSJh93rbZq6w",
  },
  {
    password:
      "btSo7CgT5mIt/ZqXn7enQsvaTlHLdD23YsIz0sJ9M64wN5VMbRjqW9qaGFkwxJLjO6wz2XwSQFhhY9urzlBbVXGWPmuMfmrgMlPr1BvKYR2tNKTnBgqXbU2XQF8yA7cZZJY9N0TqF7gD7bSv8ncOdXpEAQu7/5WTLRro6fIQAzh55vuCTFQkqf84tc7bdGRWzPDcXtNFrvU8QowFQTEliErIT8mvoZrotwda39vg3YKlSXpHWUtwvV344DyDWSWaNzMDXHKDqJRsJaVs4LpoyIU8WJyhLb1JjpaQh5uS54a2Bxv+JipZisd8F78UBTA74nwj4I8fjjgabZAPNdpssqIxSnhflAC5rwCEXxPA6uZuuHSXJLvq4Blsu4gqCf5x+6WB/ANgkoj5or+oMxMT/2AaPXmLIQqZB3bkJETLWPg7DmCrcnHkb+EbE9BBYvorieW0WEfjlMihasONSBut1NfO8dv45ZTAemDEBNVILmdyxgjd9KRFXO0mquH7ny+3WDsyIPN78xk+aZT4OqSgbX3n2EtErGq2NIwm7/y4qMi7RVuZxomD/t39iPXT2/ffYXwC2TQy1oqCuCwYC3TqJxD1skr2snfGmJ9MBgd7lvphiyc1QiRMCuAGmudsDJkYG5+7rjcdTMcYohSKn9LIs83M7C3Klm/68HpVXMp7v45ZHwOpU8mNmvN73hInmnx8LqIfCE6I8Ve5cCbpwuGtm2HE+3pY8e8IqosjMTYsR/0awDcLrC+ION5M26Jy9OAhXGTq0IT53Ss11KPRDx5tSSM+m0/afYbAozTUJmdT4cxcsNZ0BNG4z5aS7+lVXnpdwuUI3H5tsNN8/OAuvOgA1lVIh0o5XB/+OhK4xmXcsvGR1c2RWXZ4sqGIvC9gwFkqYa/7l8B7R8f5YAteOnir5JxC1c4XWQrfCUl0OsYZfFcok9soH3Akm1TgFQZLbtI+2NtiTkW6ftcIjuXK0yh0F3WDCm7aGGXBnFeMibm9/p/epvomXDFWAQuS/Xgn0Gxq",
    hash: "$pbkdf2-sha1$i=10$74zDj57OLe+pSLdqNQB5JQ$x8zroa19sutXwZB+g88S7JXK0pc",
  },
  {
    password:
      "btSo7CgT5mIt/ZqXn7enQsvaTlHLdD23YsIz0sJ9M64wN5VMbRjqW9qaGFkwxJLjO6wz2XwSQFhhY9urzlBbVXGWPmuMfmrgMlPr1BvKYR2tNKTnBgqXbU2XQF8yA7cZZJY9N0TqF7gD7bSv8ncOdXpEAQu7/5WTLRro6fIQAzh55vuCTFQkqf84tc7bdGRWzPDcXtNFrvU8QowFQTEliErIT8mvoZrotwda39vg3YKlSXpHWUtwvV344DyDWSWaNzMDXHKDqJRsJaVs4LpoyIU8WJyhLb1JjpaQh5uS54a2Bxv+JipZisd8F78UBTA74nwj4I8fjjgabZAPNdpssqIxSnhflAC5rwCEXxPA6uZuuHSXJLvq4Blsu4gqCf5x+6WB/ANgkoj5or+oMxMT/2AaPXmLIQqZB3bkJETLWPg7DmCrcnHkb+EbE9BBYvorieW0WEfjlMihasONSBut1NfO8dv45ZTAemDEBNVILmdyxgjd9KRFXO0mquH7ny+3WDsyIPN78xk+aZT4OqSgbX3n2EtErGq2NIwm7/y4qMi7RVuZxomD/t39iPXT2/ffYXwC2TQy1oqCuCwYC3TqJxD1skr2snfGmJ9MBgd7lvphiyc1QiRMCuAGmudsDJkYG5+7rjcdTMcYohSKn9LIs83M7C3Klm/68HpVXMp7v45ZHwOpU8mNmvN73hInmnx8LqIfCE6I8Ve5cCbpwuGtm2HE+3pY8e8IqosjMTYsR/0awDcLrC+ION5M26Jy9OAhXGTq0IT53Ss11KPRDx5tSSM+m0/afYbAozTUJmdT4cxcsNZ0BNG4z5aS7+lVXnpdwuUI3H5tsNN8/OAuvOgA1lVIh0o5XB/+OhK4xmXcsvGR1c2RWXZ4sqGIvC9gwFkqYa/7l8B7R8f5YAteOnir5JxC1c4XWQrfCUl0OsYZfFcok9soH3Akm1TgFQZLbtI+2NtiTkW6ftcIjuXK0yh0F3WDCm7aGGXBnFeMibm9/p/epvomXDFWAQuS/Xgn0Gxq",
    hash: "$pbkdf2-sha256$i=10$Adh27ZBvsRCOS7F/FfQCwA$eGjXnY+9BFQ8yZtpwzltUoKZJYjNJ640Y5sXfpPKFWc",
  },
  {
    password:
      "btSo7CgT5mIt/ZqXn7enQsvaTlHLdD23YsIz0sJ9M64wN5VMbRjqW9qaGFkwxJLjO6wz2XwSQFhhY9urzlBbVXGWPmuMfmrgMlPr1BvKYR2tNKTnBgqXbU2XQF8yA7cZZJY9N0TqF7gD7bSv8ncOdXpEAQu7/5WTLRro6fIQAzh55vuCTFQkqf84tc7bdGRWzPDcXtNFrvU8QowFQTEliErIT8mvoZrotwda39vg3YKlSXpHWUtwvV344DyDWSWaNzMDXHKDqJRsJaVs4LpoyIU8WJyhLb1JjpaQh5uS54a2Bxv+JipZisd8F78UBTA74nwj4I8fjjgabZAPNdpssqIxSnhflAC5rwCEXxPA6uZuuHSXJLvq4Blsu4gqCf5x+6WB/ANgkoj5or+oMxMT/2AaPXmLIQqZB3bkJETLWPg7DmCrcnHkb+EbE9BBYvorieW0WEfjlMihasONSBut1NfO8dv45ZTAemDEBNVILmdyxgjd9KRFXO0mquH7ny+3WDsyIPN78xk+aZT4OqSgbX3n2EtErGq2NIwm7/y4qMi7RVuZxomD/t39iPXT2/ffYXwC2TQy1oqCuCwYC3TqJxD1skr2snfGmJ9MBgd7lvphiyc1QiRMCuAGmudsDJkYG5+7rjcdTMcYohSKn9LIs83M7C3Klm/68HpVXMp7v45ZHwOpU8mNmvN73hInmnx8LqIfCE6I8Ve5cCbpwuGtm2HE+3pY8e8IqosjMTYsR/0awDcLrC+ION5M26Jy9OAhXGTq0IT53Ss11KPRDx5tSSM+m0/afYbAozTUJmdT4cxcsNZ0BNG4z5aS7+lVXnpdwuUI3H5tsNN8/OAuvOgA1lVIh0o5XB/+OhK4xmXcsvGR1c2RWXZ4sqGIvC9gwFkqYa/7l8B7R8f5YAteOnir5JxC1c4XWQrfCUl0OsYZfFcok9soH3Akm1TgFQZLbtI+2NtiTkW6ftcIjuXK0yh0F3WDCm7aGGXBnFeMibm9/p/epvomXDFWAQuS/Xgn0Gxq",
    hash: "$pbkdf2-sha512$i=10$+5O4M7NSwy8rIfoy77b13A$J3sI1nGchlvAhsZds8/xjZXLSUqxaVyVI3OmfYYaCA0n9aA1KpGXbS8a+t9wOpvplHSXM9tkbO0t1SmsAh4hDg",
  },
];

export const testHashScrypt = [
  {
    password: "password",
    hash: "$scrypt$ln=10,r=8,p=2$HMUY14uQGeBdYLBLnH7HwV6Y6EFK52NuptVcOKxrrBI$b8SYO5O6okuGEPOf3v/+AoNjffjKtvcQA6/MxEyK3KA",
  },
  {
    password: "pass\x00word",
    hash: "$scrypt$ln=10,r=8,p=2$gKUOlG9++XnpXRt7P1U2Ji/YlJDgQMJLynRPGB+B6ek$5cGmqGeRjMcCyRMQOmwmuh7hydYVHErMaeQTjHOEpMc",
  },
  {
    password: "pass\r\nword",
    hash: "$scrypt$ln=10,r=8,p=2$md0DCDJU924MIdx5eLIEvRMBmBu6j9ZKBv5wozMvSWc$KXEelvzQlEVA2qUl+Hd2qfQ8XpwAJu7xHaxwo6i3UPU",
  },
  {
    password: "耀嘉音",
    hash: "$scrypt$ln=10,r=8,p=2$QbX1U+UuRaOTsedjAYD6ZkjF4uDBAhi8NiKebGaVmyI$+DRR8zdiCxpskTf+cJQQH7HuJPosgSPlJPU8ycb0RvQ",
  },
  {
    password: "🇮🇩🇮🇩🇮🇩",
    hash: "$scrypt$ln=10,r=8,p=2$EHchi6W4sfp+jvMiUiHD3OVN94A7ARMcHZRo1mSzXHQ$uYQP7sn+RiFdvWERf0lcT6JydZuKWNs+XDGr6C70DZ8",
  },
  {
    password:
      "btSo7CgT5mIt/ZqXn7enQsvaTlHLdD23YsIz0sJ9M64wN5VMbRjqW9qaGFkwxJLjO6wz2XwSQFhhY9urzlBbVXGWPmuMfmrgMlPr1BvKYR2tNKTnBgqXbU2XQF8yA7cZZJY9N0TqF7gD7bSv8ncOdXpEAQu7/5WTLRro6fIQAzh55vuCTFQkqf84tc7bdGRWzPDcXtNFrvU8QowFQTEliErIT8mvoZrotwda39vg3YKlSXpHWUtwvV344DyDWSWaNzMDXHKDqJRsJaVs4LpoyIU8WJyhLb1JjpaQh5uS54a2Bxv+JipZisd8F78UBTA74nwj4I8fjjgabZAPNdpssqIxSnhflAC5rwCEXxPA6uZuuHSXJLvq4Blsu4gqCf5x+6WB/ANgkoj5or+oMxMT/2AaPXmLIQqZB3bkJETLWPg7DmCrcnHkb+EbE9BBYvorieW0WEfjlMihasONSBut1NfO8dv45ZTAemDEBNVILmdyxgjd9KRFXO0mquH7ny+3WDsyIPN78xk+aZT4OqSgbX3n2EtErGq2NIwm7/y4qMi7RVuZxomD/t39iPXT2/ffYXwC2TQy1oqCuCwYC3TqJxD1skr2snfGmJ9MBgd7lvphiyc1QiRMCuAGmudsDJkYG5+7rjcdTMcYohSKn9LIs83M7C3Klm/68HpVXMp7v45ZHwOpU8mNmvN73hInmnx8LqIfCE6I8Ve5cCbpwuGtm2HE+3pY8e8IqosjMTYsR/0awDcLrC+ION5M26Jy9OAhXGTq0IT53Ss11KPRDx5tSSM+m0/afYbAozTUJmdT4cxcsNZ0BNG4z5aS7+lVXnpdwuUI3H5tsNN8/OAuvOgA1lVIh0o5XB/+OhK4xmXcsvGR1c2RWXZ4sqGIvC9gwFkqYa/7l8B7R8f5YAteOnir5JxC1c4XWQrfCUl0OsYZfFcok9soH3Akm1TgFQZLbtI+2NtiTkW6ftcIjuXK0yh0F3WDCm7aGGXBnFeMibm9/p/epvomXDFWAQuS/Xgn0Gxq",
    hash: "$scrypt$ln=10,r=8,p=2$pe9bkXyYWszgDZJsKmei22EYh77HbLygkNdT9h+MD6g$zBjZPd4F18oVYBrq2UGBxOUizJLbC8JoJONHKRztRwY",
  },
];
