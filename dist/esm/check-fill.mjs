export const name="check-fill";
export const id="dl_cc7df650c7e240dda864";
export const url=new URL("../icons/check-fill.svg?v=d114007dc371976dc3e8f4ebc59c5aef429fae59ae58d56acdf231a52b4700be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
