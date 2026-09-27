export const name="move-fill";
export const id="dl_ded9eabf620424d46e7c";
export const url=new URL("../icons/move-fill.svg?v=584cf6fc06545e4f96ccfe631cc4425e4218cd69cbd2ce8ee19158b360b8dfc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
