export const name="emergency_share-fill";
export const id="dl_80f579bb7ce153517962";
export const url=new URL("../icons/emergency_share-fill.svg?v=5bd391862b08249314ee2bdb62059b8e05b65c2254a0bac5d90c25456870bd61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
