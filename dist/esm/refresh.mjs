export const name="refresh";
export const id="dl_f2e3143620c5b8ccea75";
export const url=new URL("../icons/material_symbols/refresh.svg?v=382e46e0fa5f137e1ad40a1a7594c0241b81e5a97138a97f1bbab1c7bb9e242a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
