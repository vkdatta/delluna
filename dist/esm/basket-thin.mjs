export const name="basket-thin";
export const id="dl_47de469136854ba58014";
export const url=new URL("../icons/basket-thin.svg?v=04d88103ed678a3a4121f1e23f82186deba7809dcbd1ac15f058a77722b0034a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
