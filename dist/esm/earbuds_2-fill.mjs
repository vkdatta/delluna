export const name="earbuds_2-fill";
export const id="dl_6ffbb03b3898dcec5bd2";
export const url=new URL("../icons/earbuds_2-fill.svg?v=ade039f774eaee5b583d86a7c98b3d8339445e168f5c97cfc9831eb6b213ee12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
