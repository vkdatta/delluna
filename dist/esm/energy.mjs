export const name="energy";
export const id="dl_246b49de02df52af23d9";
export const url=new URL("../icons/energy.svg?v=1e834a9194cf6fad5275543a14f86aa4713d19e1b13a577b19e234af4f2ede73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
