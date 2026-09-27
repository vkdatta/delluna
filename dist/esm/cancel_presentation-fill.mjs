export const name="cancel_presentation-fill";
export const id="dl_380cc42cdbf66ba02c06";
export const url=new URL("../icons/cancel_presentation-fill.svg?v=191d3f123d29e2371e5c4089a78da9dfc14756a7110bcaaae36bdd2c4227a7e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
