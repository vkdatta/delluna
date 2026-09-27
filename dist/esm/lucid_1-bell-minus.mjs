export const name="lucid_1-bell-minus";
export const id="dl_c353882438f64dc59d56";
export const url=new URL("../icons/lucid_1-bell-minus.svg?v=111e917fff5f19d7e410def093ca2fa55288a91025e25f7986e6abcdf9fb296b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
