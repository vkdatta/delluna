export const name="knife-fill";
export const id="dl_170c042f2dad4407a4e0";
export const url=new URL("../icons/knife-fill.svg?v=eafd330f3a9a33600e103ce4c9afd060d9a81bd83923b426bf9808018ca6b075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
