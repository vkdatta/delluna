export const name="car_tag";
export const id="dl_b28206de84144fd991fe";
export const url=new URL("../icons/car_tag.svg?v=8fab82591e9be154c5a6cff454d5a5fc313d0bcb1f610290677ff3d6e185238e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
