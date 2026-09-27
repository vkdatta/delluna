export const name="timer_3_alt_1-fill";
export const id="dl_ccf441487e3cb93923d8";
export const url=new URL("../icons/timer_3_alt_1-fill.svg?v=a26a1d9325a046f326d39ed65ac9e164de3e691b3161ff248542934e9fc6e8f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
