export const name="car_fan_recirculate-fill";
export const id="dl_a3e28648001ea27225fc";
export const url=new URL("../icons/car_fan_recirculate-fill.svg?v=1c3a6e784cc168757dab07a54bab30ad8a9638ea0783367de5ff17634575ab61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
