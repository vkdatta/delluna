export const name="gavel";
export const id="dl_1ac98480aaad4874a2dc";
export const url=new URL("../icons/gavel.svg?v=a0cfb1ffde4ab9cd5551474362245955df6599ca6fdbd2d369aaae9f36fce85f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
