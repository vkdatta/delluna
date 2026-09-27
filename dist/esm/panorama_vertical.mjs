export const name="panorama_vertical";
export const id="dl_59c14a878fbf63d1f3e7";
export const url=new URL("../icons/panorama_vertical.svg?v=20e0590a2590b1445a438031a8ccf37602ed1f68823781e2413b4008b82566ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
