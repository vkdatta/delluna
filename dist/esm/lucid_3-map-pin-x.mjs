export const name="lucid_3-map-pin-x";
export const id="dl_70381fb2553242c090bc";
export const url=new URL("../icons/lucid_3-map-pin-x.svg?v=ccbebb3e0128994864e8e5a1b275d95cb48a9bb8a985c906e03c53fe3dea88e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
