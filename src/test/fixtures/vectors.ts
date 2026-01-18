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
