export const name="pentagram-light";
export const id="dl_5f84ed05208a41d498ae";
export const url=new URL("../icons/pentagram-light.svg?v=613f41bdf80f4e98631afb1b2b57ceb775c847473402f7cc65387822966ac7da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
