export const name="directions_subway-fill";
export const id="dl_c2f48d13281448ae1213";
export const url=new URL("../icons/directions_subway-fill.svg?v=7c00f1618d01906e1384be3bba3cb3c76bc7e8ae3275699293b01457f0f535b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
