export const name="local_gas_station";
export const id="dl_58bd6eea802a7f31879e";
export const url=new URL("../icons/local_gas_station.svg?v=49de868867052acf9114a4435a0ca363eec177bb7263725c3933d6d2bb49618c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
