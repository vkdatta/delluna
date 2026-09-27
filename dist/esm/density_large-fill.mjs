export const name="density_large-fill";
export const id="dl_2a0be891b9963462aebf";
export const url=new URL("../icons/density_large-fill.svg?v=fb91641bb2c2912a8038530e2fd65657573cf6599b15c1f922756609f8c6597c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
