export const name="4g_mobiledata_badge-fill";
export const id="dl_f342bcb5d72335abcb37";
export const url=new URL("../icons/4g_mobiledata_badge-fill.svg?v=df4e1c2ff008163f776ab07aa866aeab8cd755b327d042e020ec19fba0d93120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
