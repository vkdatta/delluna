export const name="script-fill";
export const id="dl_6afbb9cca181648a241c";
export const url=new URL("../icons/script-fill.svg?v=05ec60ae37523e2a07e5d5574455954f5f838056386069990211090aef43c302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
