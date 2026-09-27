export const name="lucid_3-share";
export const id="dl_319b309b41bc43e1bb11";
export const url=new URL("../icons/lucid_3-share.svg?v=a18e04aa1d4f73b50f50e405954152e245efa51abf1d2fba2741712cd3d5b232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
