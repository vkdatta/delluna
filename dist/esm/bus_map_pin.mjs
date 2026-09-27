export const name="bus_map_pin";
export const id="dl_59b42c8e17cb32baa5a0";
export const url=new URL("../icons/bus_map_pin.svg?v=a04b8f5b61a17642ce2ab371769467feea3b962beb2165c6289d7f278c1d07c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
