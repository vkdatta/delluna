export const name="battery-high-fill";
export const id="dl_bf71c5c484074a6baf02";
export const url=new URL("../icons/battery-high-fill.svg?v=15d2ecc4e824b3c40e5b9f4be4eaa7467d722e008b23813b4f091c67428ac246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
