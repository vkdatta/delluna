export const name="toast-fill";
export const id="dl_4f40405d16645f20991b";
export const url=new URL("../icons/toast-fill.svg?v=b815c87c55785cf2654df329e3fb8e3ff3971db67d649f14125d3668ae44a142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
