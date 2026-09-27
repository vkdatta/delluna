export const name="shelf_auto_hide-fill";
export const id="dl_9a74eb79582cd2bb5522";
export const url=new URL("../icons/shelf_auto_hide-fill.svg?v=64ab6189c7f2ff9c3f0263c2aacb3c4e58d676aab03142fd78a47fec39506138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
