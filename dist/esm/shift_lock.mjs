export const name="shift_lock";
export const id="dl_5c8795efda7642859498";
export const url=new URL("../icons/shift_lock.svg?v=77f73bc1a7b18d2dd2e19c2d6b7d17dcb26312b1e1f49a6fb34fb14e21ce0aac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
