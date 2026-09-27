export const name="night_sight_max-fill";
export const id="dl_ab522c645bc4b485172e";
export const url=new URL("../icons/night_sight_max-fill.svg?v=8ed837c53d11300289111849400919d0c2fb33d4156f9d3ef647da6e50de56af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
