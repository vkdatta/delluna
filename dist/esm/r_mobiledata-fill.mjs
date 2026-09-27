export const name="r_mobiledata-fill";
export const id="dl_3a904b2f0970b88700cb";
export const url=new URL("../icons/r_mobiledata-fill.svg?v=2dd0e2da2db0367448f7afd9fd4bdb54a1393557ddbaff5a647422299406bebc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
