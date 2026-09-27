export const name="lucid_2-fishing-rod";
export const id="dl_ae11d52ebba644c3ac13";
export const url=new URL("../icons/lucid_2-fishing-rod.svg?v=1c01ba855cb447e138ec760553135d58876a0aa2b271e3a420c5e608779daf99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
