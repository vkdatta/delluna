export const name="lucid_3-save-off";
export const id="dl_3f8f55d88d044b498ab4";
export const url=new URL("../icons/lucid_3-save-off.svg?v=ffa6b5f69649da5fc2726f1496a11f73b5bd260ee3c699a981cc9f34a7e7b4fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
