export const name="takeout_dining-fill";
export const id="dl_edcd1f804e2fdf82da49";
export const url=new URL("../icons/takeout_dining-fill.svg?v=a4dfbede5fa5aa26b5cd956c9916d21472085000d40599ffee76cf95fe47acad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
