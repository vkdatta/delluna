export const name="crosshair-simple-light";
export const id="dl_e95cc02a513246419423";
export const url=new URL("../icons/crosshair-simple-light.svg?v=0aa78aa71a600be440de47ac8a90cee652aa80f2f8c053db7c8cfb6525848486",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
