export const name="check_circle_unread-fill";
export const id="dl_f12e87164afd883c3c33";
export const url=new URL("../icons/check_circle_unread-fill.svg?v=b27702905dc6e7db333e496c62b7d0d3c41c253b87a7852ee3493682a4f79c5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
