export const name="shield_locked-fill";
export const id="dl_84a776aa7e10119f2399";
export const url=new URL("../icons/shield_locked-fill.svg?v=a99d4f518b04d4b3a0d02f1d47e659813398dd9aa6eab8761f994fb058d39a22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
