export const name="imagesmode-fill";
export const id="dl_a22b34403fb43349359c";
export const url=new URL("../icons/imagesmode-fill.svg?v=1cd3099dbc84a9dd111778bf70b4445e6015cb32b7c0c8ed50d1494d0acc5542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
