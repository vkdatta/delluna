export const name="steering_wheel_heat-fill";
export const id="dl_6df502b0c387e0cd01cf";
export const url=new URL("../icons/steering_wheel_heat-fill.svg?v=c55493e0f52920e3a022a190b77a9dc78090731a05fe58888eea9758552e69ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
