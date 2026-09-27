export const name="emergency_share";
export const id="dl_809f29b56601ffa4fe5e";
export const url=new URL("../icons/emergency_share.svg?v=dc98a11f324d21aebb2f01a4d27eb9e7504b42fec6996e3f0dd06f48533fa08d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
