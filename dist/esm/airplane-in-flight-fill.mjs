export const name="airplane-in-flight-fill";
export const id="dl_584c4ffd5c5a4246badf";
export const url=new URL("../icons/airplane-in-flight-fill.svg?v=4610c5a531276fe425e553918ac6fd312437f676e3b49e9d96f98ec3e0dae5ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
