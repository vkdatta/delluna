export const name="reset_wrench-fill";
export const id="dl_af7ba2c12c7511d5fe7f";
export const url=new URL("../icons/reset_wrench-fill.svg?v=7baf785d2db1728ff39d05ed6795ea4ef0e41de0feee2c03d467914cfc56a98d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
