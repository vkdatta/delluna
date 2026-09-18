export const name="home_and_garden-fill";
export const id="dl_46a4eff1e57e4576bee1";
export const url=new URL("../icons/home_and_garden-fill.svg?v=a2af46be2d1a3e5e1cabf022820e06a90ba1b3cbae0ce0e60751bb36d2fd71bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
