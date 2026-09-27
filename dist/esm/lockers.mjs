export const name="lockers";
export const id="dl_20e14bb5af0441b49890";
export const url=new URL("../icons/lockers.svg?v=6d06f260f3b36eb549b382706a670bae25b2304837cdbca204361652253e71cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
