export const name="tree-fill";
export const id="dl_94583b4f102b10f8f26e";
export const url=new URL("../icons/tree-fill.svg?v=4a27e3cfa43ddea43f3cddba46959c712c05d329c30c589c4b517a6633e66199",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
