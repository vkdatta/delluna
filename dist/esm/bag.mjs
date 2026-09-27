export const name="bag";
export const id="dl_f3f4d227204e4c80970e";
export const url=new URL("../icons/bag.svg?v=91236fc7f1c597f6ea32f8af9b0e4c19f5ee3242cb612615c55e05dc6742eba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
