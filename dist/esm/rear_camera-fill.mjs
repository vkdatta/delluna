export const name="rear_camera-fill";
export const id="dl_1141a9541698459181db";
export const url=new URL("../icons/R/rear_camera-fill.svg?v=a7293e53afa7adc304fe4529c8c8b79e01eb19013f7938dbc7b35ecea1b370ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
