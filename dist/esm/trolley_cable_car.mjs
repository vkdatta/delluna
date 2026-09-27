export const name="trolley_cable_car";
export const id="dl_9e9195b88e1a28067fbd";
export const url=new URL("../icons/trolley_cable_car.svg?v=06cce77dd0d856f9e1a6099f8652c68c13423134581ca7153a0bbc65f74f7abc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
