export const name="window_sensor-fill";
export const id="dl_1a6cf40b131341f68079";
export const url=new URL("../icons/window_sensor-fill.svg?v=c650a3f374b0def9b2ce4aafccdba19b2ed786c453a8ccabbc6bec6e9c97daa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
