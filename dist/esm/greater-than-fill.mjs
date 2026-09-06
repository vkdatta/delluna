export const name="greater-than-fill";
export const id="dl_09b1365433c9459faaef";
export const url=new URL("../icons/greater-than-fill.svg?v=2d447fd4a2ec576f2165437dfad2eee5aa135e41cb1a84025dc167825863f8ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
