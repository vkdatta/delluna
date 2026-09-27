export const name="spoke-fill";
export const id="dl_81d1cf1fd7255fe70878";
export const url=new URL("../icons/spoke-fill.svg?v=83017cd3c5a1f0c796593dfb05d25ac676b90eb86859380056ac38910a74a0f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
