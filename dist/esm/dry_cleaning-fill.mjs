export const name="dry_cleaning-fill";
export const id="dl_7d057b1b63690163caec";
export const url=new URL("../icons/dry_cleaning-fill.svg?v=6e5673abfbb89e135dc7aaa5951be5dc7f3f466633672c6e0f992b0e481c2d4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
