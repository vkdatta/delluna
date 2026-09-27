export const name="pill-duotone";
export const id="dl_a00db75955624a80866d";
export const url=new URL("../icons/pill-duotone.svg?v=33f0f6f71603eae3e5abd2cb5c264eaab73a60fb4c48bbee67c22de877f5ec54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
