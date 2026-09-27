export const name="photo_frame-fill";
export const id="dl_0811ae56006c1f8855f5";
export const url=new URL("../icons/photo_frame-fill.svg?v=f498ceeb49bb7ae0bb8d5bb8cba47cbd5b6d25d86017f65cb598727644d2561f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
