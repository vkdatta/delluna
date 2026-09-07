export const name="visor";
export const id="dl_0eacea01542b46fba09c";
export const url=new URL("../icons/V/visor.svg?v=6c2dd0ba177ce6e5f7a8bcb32bfb2f9348bc4897cff6e34abfb42986ca0ffd56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
