
const requiredEnvVars = ['VITE_INSTANCE'];
const undefinedVars: string[] = [];
const log: string[] = [];

log.push("PREBUILD: Checking environment variables...");
requiredEnvVars.forEach(requiredEnvVar => {
    if (process.env[requiredEnvVar]) {
        log.push(`PREBUILD: ${requiredEnvVar}=${process.env[requiredEnvVar]}`);
    } else {
        undefinedVars.push(requiredEnvVar);
    }
});

if (undefinedVars.length > 0) {
    console.error(`PREBUILD: Failed! Following required vars undefined ${undefinedVars.map((v) => `'${v}'`).join(", ")}.\n`);
    process.exit(1);
} else {
    console.info(`PREBUILD: ${log.join("\n")}\nPrep ok!\n`);
    process.exit(0);
}