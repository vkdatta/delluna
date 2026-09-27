export const name="wifi-low";
export const id="dl_12debd34e67799bc9b28";
export const url=new URL("../icons/wifi-low.svg?v=ae67947dba13acc97e3ff5c219a7c576c45865299c1ec3ec2960999ab2d3178a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
