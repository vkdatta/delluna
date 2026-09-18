export const name="sync_saved_locally";
export const id="dl_91a3532d4bf14c409fe3";
export const url=new URL("../icons/sync_saved_locally.svg?v=7f2a2856befa7243f5840b90aaac38fde8145f41b3bb2458d00d180df1deb29c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
