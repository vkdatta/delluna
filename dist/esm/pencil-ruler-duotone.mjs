export const name="pencil-ruler-duotone";
export const id="dl_1495596624cf40eca01d";
export const url=new URL("../icons/pencil-ruler-duotone.svg?v=75fe3787ceb67f5c02b1c02555e6465136c8f3ce4a856b8f0dfad2797ec3c226",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
