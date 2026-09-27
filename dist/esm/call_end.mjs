export const name="call_end";
export const id="dl_9dd4a527f0cdb30d0fcc";
export const url=new URL("../icons/call_end.svg?v=aebeed58673291c9003c4c7977ebb9bc339e172ae6f38c545d0cdb9c15119f74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
