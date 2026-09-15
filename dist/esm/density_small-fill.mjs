export const name="density_small-fill";
export const id="dl_cc009e55d1c4463fb012";
export const url=new URL("../icons/D/density_small-fill.svg?v=ebde84fe68aad95f470685409399048d97bad6210b5da317037fa3a6e93334e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
