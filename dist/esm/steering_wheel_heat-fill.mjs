export const name="steering_wheel_heat-fill";
export const id="dl_2562e79178b2045d3b4b";
export const url=new URL("../icons/steering_wheel_heat-fill.svg?v=e357e416a0e5f7f841171f2f0ffb924fa28bd287deb2a58f8cc590c13fe86074",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
