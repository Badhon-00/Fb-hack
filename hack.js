#!/usr/bin/env node

const colors = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
  reset: "\x1b[0m"
};

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const name = process.argv[2];
const uid = process.argv[3];

if (!name || !uid) {
  console.log(colors.red + "Usage: hack <NAME> <FB_UID>" + colors.reset);
  process.exit(0);
}

async function run() {
  console.clear();

  console.log(colors.magenta + "SHARK CYBER FRAMEWORK v3.0 ☠" + colors.reset);
  await sleep(1200);

  console.log(colors.cyan + `🎯 Target Locked:` + colors.reset);
  console.log(colors.green + `   Name : ${name}` + colors.reset);
  console.log(colors.green + `   UID  : ${uid}` + colors.reset);
  await sleep(1500);

  console.log(colors.yellow + "[*] Collecting account metadata..." + colors.reset);
  await sleep(1500);

  console.log(colors.yellow + "[*] Bypassing Facebook security layers..." + colors.reset);
  await sleep(1800);

  console.log(colors.green + "[✓] 2FA Shield → BYPASSED" + colors.reset);
  await sleep(1200);

  console.log(colors.yellow + "[*] Injecting fake access token..." + colors.reset);
  await sleep(1500);

  console.log(colors.yellow + "[*] Cracking password hash..." + colors.reset);
  for (let i = 0; i <= 100; i += 10) {
    await sleep(280);
    process.stdout.write(colors.cyan + `   Progress: ${i}%\r` + colors.reset);
  }

  console.log("\n" + colors.green + "[✓] Password Decrypted" + colors.reset);
  await sleep(1000);

  console.log(colors.red + "[!] Extracting private data..." + colors.reset);
  await sleep(1300);

  console.log(colors.green + "✔ Messages → EXTRACTED" + colors.reset);
  console.log(colors.green + "✔ Photos   → EXTRACTED" + colors.reset);
  console.log(colors.green + "✔ Friends  → EXTRACTED" + colors.reset);
  await sleep(1200);

  console.log("\n" + colors.green + "✅ ACCESS GRANTED" + colors.reset);
  console.log(colors.cyan + "⚠️TARGET IS ALMOST HACKED" + colors.reset);
  console.log(colors.cyan + "⚠️ DATA WAS Leaked" + colors.reset);
}

run();
