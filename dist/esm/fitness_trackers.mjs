export const name="fitness_trackers";
export const id="dl_4bc958e23188414bb493";
export const url=new URL("../icons/F/fitness_trackers.svg?v=0db4002d8f418bc0e499d3a1e6ac334d030389bc6a10c120cdab7dbbc9272012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
