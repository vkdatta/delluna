export const name="roundabout_left-fill";
export const id="dl_76b67b89770e7990fe8d";
export const url=new URL("../icons/roundabout_left-fill.svg?v=7b56a7c0c607077b89360d76a9206e0f1c82b0165c8fd58acb4e7e328634a644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
