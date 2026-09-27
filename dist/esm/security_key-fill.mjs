export const name="security_key-fill";
export const id="dl_0d9520ffeabc42d2e4e2";
export const url=new URL("../icons/security_key-fill.svg?v=f1856014945728782d453cd863fba0a0faf1f49be719a9dd0e855463e0245d19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
