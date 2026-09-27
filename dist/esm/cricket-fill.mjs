export const name="cricket-fill";
export const id="dl_026edaf413a544d5a7fe";
export const url=new URL("../icons/cricket-fill.svg?v=b1c085ae5ed91bf12e613702d7a7905ca2aae1f269bed05b591ef05484ad3e3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
