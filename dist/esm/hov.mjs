export const name="hov";
export const id="dl_42dabfd998e8a94c0d32";
export const url=new URL("../icons/hov.svg?v=6b7ccc1a4a2c274429102b1d3baa454a5e03981ae9bca9f2d15e97518c58f48c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
