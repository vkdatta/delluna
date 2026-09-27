export const name="dashboard_2";
export const id="dl_bc9521d1365d520e55e1";
export const url=new URL("../icons/dashboard_2.svg?v=5162ae98dbbdb63bd90507eb3b0c32ba754a35d794ecc660cb9e745d812d3b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
