export const name="thermostat_arrow_down-fill";
export const id="dl_8a1aa7b54a6d411dadea";
export const url=new URL("../icons/T/thermostat_arrow_down-fill.svg?v=d2f67724e855e54d8a0d57dc9409fab97c65b41b23b90b977f4bce5e3db48df4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
