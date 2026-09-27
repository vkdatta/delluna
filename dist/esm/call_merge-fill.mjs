export const name="call_merge-fill";
export const id="dl_94274e5fc0847c453c15";
export const url=new URL("../icons/call_merge-fill.svg?v=119beacc900724c54d2fda5e61fcfdea7ffbf7bd550e62e68f4518aad09e0e67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
