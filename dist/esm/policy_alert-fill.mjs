export const name="policy_alert-fill";
export const id="dl_d40068967994482aa632";
export const url=new URL("../icons/P/policy_alert-fill.svg?v=7fee14d63159260cf171af06f6eb9e10fe3a4de4283fec88398ca2d1843c2948",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
