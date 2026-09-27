export const name="ifl-fill";
export const id="dl_7065adb585ae2721be8e";
export const url=new URL("../icons/ifl-fill.svg?v=16e2fce5fa172d275facb55a4038b78dab36ae312e800e762e40e59aeacdbf54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
