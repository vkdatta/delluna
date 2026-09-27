export const name="sailing";
export const id="dl_e49d327ba446b3d45ecd";
export const url=new URL("../icons/sailing.svg?v=f56a974308b66c4c56a3198c2e1b92f0b2341a54b09ace4b1d90d32b1eb3da70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
