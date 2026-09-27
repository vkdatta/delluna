export const name="security-fill";
export const id="dl_f1c3bb6400a29db13d9b";
export const url=new URL("../icons/security-fill.svg?v=64182fb93adcef8947862c96aa7a5605826815bd2c96a16deb24856f400cbd63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
