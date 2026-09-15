export const name="energy";
export const id="dl_9ac7d4c42a644f538c46";
export const url=new URL("../icons/E/energy.svg?v=1e834a9194cf6fad5275543a14f86aa4713d19e1b13a577b19e234af4f2ede73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
