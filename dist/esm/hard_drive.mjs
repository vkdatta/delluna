export const name="hard_drive";
export const id="dl_b2a569beed954e51bbbd";
export const url=new URL("../icons/hard_drive.svg?v=4b6a9d396f72ffe3730dd9fbdf39be0e8023eb74cd2d24e9f904bc038473abd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
