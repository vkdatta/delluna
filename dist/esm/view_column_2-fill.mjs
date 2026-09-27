export const name="view_column_2-fill";
export const id="dl_da74c7124777df23315f";
export const url=new URL("../icons/view_column_2-fill.svg?v=71b86c35d9c1feac9ab9273d6a74de4db1a6cd3c1cd107dc7522cb7fccb869f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
