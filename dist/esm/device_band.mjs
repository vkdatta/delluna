export const name="device_band";
export const id="dl_614c13aaf65290a4f6aa";
export const url=new URL("../icons/device_band.svg?v=4c7232568146442b706734691953446539af3e2d507f83db3a581e4923b7f26a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
