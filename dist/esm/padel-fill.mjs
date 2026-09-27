export const name="padel-fill";
export const id="dl_55da93609d5434bf71bf";
export const url=new URL("../icons/padel-fill.svg?v=c3f80c65dd061f4081823f61bc2d1de7bea29a5e8634f2b8c1fa64fc310e7943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
