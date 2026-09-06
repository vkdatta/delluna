export const name="battery-vertical-high-light";
export const id="dl_1be1a391a1464e2ebff4";
export const url=new URL("../icons/battery-vertical-high-light.svg?v=52d3fcf0b78556d79ea1d1fced0fa7c62c6747036ffc64aa8edc4f59bede42fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
