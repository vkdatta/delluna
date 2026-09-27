export const name="disc_full";
export const id="dl_57d75bacc04f5473a8a9";
export const url=new URL("../icons/disc_full.svg?v=d1a2c9a8aa36b47334918c8eff6190693cb2b2363e6fa20543c958b435b38e3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
