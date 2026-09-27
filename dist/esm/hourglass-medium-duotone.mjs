export const name="hourglass-medium-duotone";
export const id="dl_3987bed1d2164e709415";
export const url=new URL("../icons/hourglass-medium-duotone.svg?v=be3c35fcbafcc7533ce96150f3895373e2a98e41d122c5f0f20b355dc062367e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
