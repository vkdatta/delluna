export const name="car-battery-fill";
export const id="dl_1a26d7bcab4540039a8f";
export const url=new URL("../icons/car-battery-fill.svg?v=733afbc4a60af75f6bfb7be0cb435df714490a3ed5ae08ca249b9502febf4e82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
