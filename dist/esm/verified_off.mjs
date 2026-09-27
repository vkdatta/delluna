export const name="verified_off";
export const id="dl_c33f0f2809dda0109ff7";
export const url=new URL("../icons/verified_off.svg?v=5cc927a7dc64bd782db5fbe46e8df8adc6bc62181a90582c0f9c073b17db0667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
