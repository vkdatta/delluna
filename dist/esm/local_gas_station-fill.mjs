export const name="local_gas_station-fill";
export const id="dl_9db9a8265bb95f19c3f9";
export const url=new URL("../icons/local_gas_station-fill.svg?v=d7886e5ae404a0025278bb04e847b1d78ce35f6d79c45ab7bf40fc67076e9dd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
