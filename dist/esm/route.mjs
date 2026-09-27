export const name="route";
export const id="dl_a06df03ceb2a301b1dbb";
export const url=new URL("../icons/route.svg?v=ea1a29e567ca3ff5fe9ada7821de8dc69a1826fb107ea07d38e58e7997202327",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
