export const name="wrist-fill";
export const id="dl_c3e3f8fc2eeb72fef164";
export const url=new URL("../icons/wrist-fill.svg?v=a7da4e21422568f8d9971b2583a74cad59b593f287061c99d90ad25ef46d88d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
