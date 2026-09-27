export const name="detector_offline-fill";
export const id="dl_a25083aaae609e2f6a18";
export const url=new URL("../icons/detector_offline-fill.svg?v=dba87966ac1f746452a0f02ff99bb5b5d8dc541b2f9782a1f946eea6dd0bd040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
