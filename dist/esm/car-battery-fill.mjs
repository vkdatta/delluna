export const name="car-battery-fill";
export const id="dl_1a26d7bcab4540039a8f";
export const url=new URL("../icons/car-battery-fill.svg?v=a7904230cc358b58eb83cf2e9afff9f01da86ee94f932b3080de61a82bc7b5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
