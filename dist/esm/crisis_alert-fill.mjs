export const name="crisis_alert-fill";
export const id="dl_fd138badee8a2b2ce5a7";
export const url=new URL("../icons/crisis_alert-fill.svg?v=58d406b4361c56dafd820e43449cbca1347a832d18ac7dd40ab6c7825ee04148",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
