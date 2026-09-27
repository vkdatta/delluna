export const name="encrypted_off-fill";
export const id="dl_71d1d011370463bd17e4";
export const url=new URL("../icons/encrypted_off-fill.svg?v=8d54cf0bdf62fa4c5365159752684b3f7f90317096df3867df12477aaef849c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
