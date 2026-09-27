export const name="airport_shuttle-fill";
export const id="dl_193e29dab6f3e93cb54b";
export const url=new URL("../icons/airport_shuttle-fill.svg?v=db10c3c336d46f0a28d33b878afd2f74e5aece45546661b96f96a817bf811ffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
