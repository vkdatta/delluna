export const name="lucid_1-chart-no-axes-combined";
export const id="dl_6c04f02de0f643abb892";
export const url=new URL("../icons/lucid_1-chart-no-axes-combined.svg?v=c4905ceb74d8bfbaa6edc9a7ac0206abb3567e93bcb299de141a2bab7a972cdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
