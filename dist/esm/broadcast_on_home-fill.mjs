export const name="broadcast_on_home-fill";
export const id="dl_fcb849b36051c6a1ee85";
export const url=new URL("../icons/broadcast_on_home-fill.svg?v=69ad0eb0c8afce2675c2596270ac6aa6fd744aa8748d92227fa3220290d57b35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
