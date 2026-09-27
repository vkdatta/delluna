export const name="variable_insert-fill";
export const id="dl_ef6f140bef83001c4b40";
export const url=new URL("../icons/variable_insert-fill.svg?v=46ebdecf75b322fe6fef1be5ad1fea1d8d8958b9f08537ac9c07b8a50c568cb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
