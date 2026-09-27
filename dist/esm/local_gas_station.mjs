export const name="local_gas_station";
export const id="dl_1478b239398d3cc8031a";
export const url=new URL("../icons/local_gas_station.svg?v=278daf496f801388e9e6e7ea494e988e655cb7fccabc522d44801d27fbb5b28c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
