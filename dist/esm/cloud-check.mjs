export const name="cloud-check";
export const id="dl_9938038ad5c74973a789";
export const url=new URL("../icons/cloud-check.svg?v=d9b0bdd1047bb0bee3c0436f2b14ccc0f35c377c3cff57ae0ac0e356303642e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
