export const name="door_sensor-fill";
export const id="dl_a7f991745e25464b9b75";
export const url=new URL("../icons/D/door_sensor-fill.svg?v=42b3b5e72ccdf3a1f222cd60577a7ebdadf24512caeca54de247e64fb63c56aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
