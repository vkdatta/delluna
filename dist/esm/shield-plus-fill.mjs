export const name="shield-plus-fill";
export const id="dl_0b47f1a44fd6447498f3";
export const url=new URL("../icons/S/shield-plus-fill.svg?v=4c5278b090e9623ce47f0f9f0680cf8e3d63cc5cfd0a1aa904fe6f637c4252ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
