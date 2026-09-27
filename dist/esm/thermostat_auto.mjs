export const name="thermostat_auto";
export const id="dl_d364b20d3949119ddbc3";
export const url=new URL("../icons/thermostat_auto.svg?v=8451c524b0d8e71365ec74efe5c3681af1352bdfbb35ea023a0cbed580e55c1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
