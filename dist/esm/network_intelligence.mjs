export const name="network_intelligence";
export const id="dl_fec7a45d0b843d3d46aa";
export const url=new URL("../icons/network_intelligence.svg?v=adc967f0c837b37db5a11864e19be6b8abce87d2c40f497fb72d02e7e77271b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
