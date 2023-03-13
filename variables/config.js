module.exports = {
  header: {
    name: "x-px-access-token",
    value: "tXaSgyNAjyNo04914gYJ5g9jdIWmul89wjEkA9JSmetq1pzkiyFT1AEvbmBJTruC",
  },
  betaCookie: {
      name: 'OptInBetaSite_1',
      value: 'True',
      domain: '.newhomesource.com',
      path: '/',
      expires: Date.now() / 1000 + 3600, // expires in one hour
      httpOnly: false,
      secure: false
  }
};
