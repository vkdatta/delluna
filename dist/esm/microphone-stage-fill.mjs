export const name="microphone-stage-fill";
export const id="dl_0667c069e1604c2f8f3e";
export const url=new URL("../icons/microphone-stage-fill.svg?v=79cf9f1bb2e5322c5b9ae391e8674c7668994cf453c1f3875f3cfc1f28ad4de0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
