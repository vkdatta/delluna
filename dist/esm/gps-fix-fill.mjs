export const name="gps-fix-fill";
export const id="dl_4c9662df44394936ba88";
export const url=new URL("../icons/gps-fix-fill.svg?v=146983ed58988be9c7b081df064615732ea05632e05a608e67b627dc5590c730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
