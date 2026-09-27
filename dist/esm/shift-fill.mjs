export const name="shift-fill";
export const id="dl_448867820396129c697f";
export const url=new URL("../icons/shift-fill.svg?v=7d00a8558ae3fe388929d8bde825ad46da53c51abf0393fd82ac1d91b6212ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
