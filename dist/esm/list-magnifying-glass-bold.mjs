export const name="list-magnifying-glass-bold";
export const id="dl_605fb44c13c246ed8f0d";
export const url=new URL("../icons/list-magnifying-glass-bold.svg?v=75ce1448187f7c2f606a33b76a4f4d28e79e122ce25bfe02656d891fd4b9bcf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
