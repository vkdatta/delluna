export const name="general_device-fill";
export const id="dl_cff3cda3979a838e2725";
export const url=new URL("../icons/general_device-fill.svg?v=528a852beddbf688020bdd0724fa7f0cacd0cfb87826d56a0d2e7316697c55a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
