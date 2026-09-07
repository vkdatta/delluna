export const name="watch-light";
export const id="dl_2c02897b2fd048c7a44a";
export const url=new URL("../icons/W/watch-light.svg?v=6cebbd932a77ab524d229534f8b6f9b8e58e8e6ed9804662125f9c7b3b1897e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
