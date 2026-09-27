export const name="lucid_1-battery-charging";
export const id="dl_a077ea59e095451fa5cd";
export const url=new URL("../icons/lucid_1-battery-charging.svg?v=0cdaa6413cc2acfdb063b076206b4c17666c63567888230649b098cbd72e0fa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
