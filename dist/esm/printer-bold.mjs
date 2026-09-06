export const name="printer-bold";
export const id="dl_d7eb35a7e08a472a94a4";
export const url=new URL("../icons/printer-bold.svg?v=5eee9387f5a147c4cb772d42cd2988351b89b50936676e16cba96ea5c0881728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
