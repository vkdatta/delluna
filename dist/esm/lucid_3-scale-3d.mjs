export const name="lucid_3-scale-3d";
export const id="dl_d771941261444a67a862";
export const url=new URL("../icons/lucid_3-scale-3d.svg?v=577ec995e20251ff7280c92a4f137dfcdc87cbc692a31eb213d5f69ef1bcdc2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
