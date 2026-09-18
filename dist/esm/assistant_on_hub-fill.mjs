export const name="assistant_on_hub-fill";
export const id="dl_a8b9cd51a77f48149cf5";
export const url=new URL("../icons/assistant_on_hub-fill.svg?v=f3110069dc01dbb65cb1a2ffa60a3e2ef10686bb1675fc726b22e93f783ecf11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
