export const name="circuitry-duotone";
export const id="dl_4cb49a444b4a47c7972e";
export const url=new URL("../icons/circuitry-duotone.svg?v=f0b1bc88cb5073ee046e1397aeabadf96c8b2dfc4e03b30d3521437aa05e3484",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
