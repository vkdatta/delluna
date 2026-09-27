export const name="share-fill";
export const id="dl_e28fb93e711545b91682";
export const url=new URL("../icons/share-fill.svg?v=ec08d21800b3674b696a0226836572192dc2519351104e494a97a846c3558eb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
