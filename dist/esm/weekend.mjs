export const name="weekend";
export const id="dl_40db05d4054cd23939ec";
export const url=new URL("../icons/weekend.svg?v=903f0351f85f1744f0eadac172a2d4c1fc46384d0e55db8a7568eb0932236c57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
