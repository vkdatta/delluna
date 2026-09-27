export const name="sports_tennis-fill";
export const id="dl_78b9480020f1f5f529ad";
export const url=new URL("../icons/sports_tennis-fill.svg?v=f6ed79988274a1d3524f36a6b6983c53ad3568ebb1114b16e0cf327e836965d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
