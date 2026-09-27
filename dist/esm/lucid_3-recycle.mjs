export const name="lucid_3-recycle";
export const id="dl_fb5ec6e4e9474553985e";
export const url=new URL("../icons/lucid_3-recycle.svg?v=0b300b45f77592bf1df4893877a455c4c8caa40d07cc69ed3317e695c646fd9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
