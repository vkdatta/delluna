export const name="bus_map_pin";
export const id="dl_ea10eead786db74f704a";
export const url=new URL("../icons/bus_map_pin.svg?v=79b535da153c6b2b778e3a7b7901bee86316635bd7a831f1bd994971a4539304",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
