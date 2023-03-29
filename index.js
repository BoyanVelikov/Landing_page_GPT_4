function generatePassword(length, complexity) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    let charPool = lowercase;
    if (complexity >= 1) charPool += uppercase;
    if (complexity >= 2) charPool += numbers;
    if (complexity >= 3) charPool += symbols;
    
    let password = "";
    for (let i = 0; i < length; i++) {
      let randomChar = charPool[Math.floor(Math.random() * charPool.length)];
      password += randomChar;
    }
    return password;
  }
  