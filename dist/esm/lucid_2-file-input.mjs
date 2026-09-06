export const name="lucid_2-file-input";
export const id="dl_a07820a6ec3947cf9838";
export const url=new URL("../icons/lucid_2-file-input.svg?v=85c94123ca812782f223dc6d8a74f6f2ffdac7feafca908226addac6d4d15437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
