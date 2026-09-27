export const name="lucid_1-archive-x";
export const id="dl_21b8d986d61244e99998";
export const url=new URL("../icons/lucid_1-archive-x.svg?v=88f3d7f903db5eff09d1aafb563941367d0b3c905577beb4937cfd415d148e20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
