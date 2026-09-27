export const name="lucid_2-folder-key";
export const id="dl_6f11559c32ec42769e36";
export const url=new URL("../icons/lucid_2-folder-key.svg?v=0dbb61d07c000948b3def12cd00fabfbce5022d69bab3224ca79f64b42c42cb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
