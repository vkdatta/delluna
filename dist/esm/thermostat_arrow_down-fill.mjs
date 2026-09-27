export const name="thermostat_arrow_down-fill";
export const id="dl_453b8f74b4ec75cbcf55";
export const url=new URL("../icons/thermostat_arrow_down-fill.svg?v=ece383600d613fbfb40dca31f910bc93c4557e0214c93e8c41dad1b1f2491988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
