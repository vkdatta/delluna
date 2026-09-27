export const name="fluid_balance";
export const id="dl_0e5c36ccc3ed16d3ab53";
export const url=new URL("../icons/fluid_balance.svg?v=82808f9fdd645d1a64a3f5b57cb69f255d1d0194c54a129936ca7475aa28f92d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
