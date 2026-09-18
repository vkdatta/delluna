export const name="king_bed";
export const id="dl_ad8a57be272748bb97a0";
export const url=new URL("../icons/K/king_bed.svg?v=51e80c41bb56ce9479cb637edc3ad07ddbd26a0b93faefb7554104231e515da6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
