export const name="skull-fill";
export const id="dl_d5ad8e48291c5d53d538";
export const url=new URL("../icons/skull-fill.svg?v=ccde266d19c7a840897678d2b4901a85e6f2c7699c45a7dd1751f2b5a439b188",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
