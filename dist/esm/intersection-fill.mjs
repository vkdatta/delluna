export const name="intersection-fill";
export const id="dl_c54f0f5345a548129cfc";
export const url=new URL("../icons/intersection-fill.svg?v=f92a294be54eb670ea46c8987477cc68be918bba268d9fb184266761f4c73a78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
