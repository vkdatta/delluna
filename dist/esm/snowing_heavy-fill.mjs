export const name="snowing_heavy-fill";
export const id="dl_0b498b693f170615b0c8";
export const url=new URL("../icons/snowing_heavy-fill.svg?v=548d892ca6b2591f6e02af7170214af886dee91e40c8f77f6acaaefc470a9b03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
