export const name="roller_shades-fill";
export const id="dl_e6f0ed852fb6a4613da5";
export const url=new URL("../icons/roller_shades-fill.svg?v=f8984dda7ee6e0454d45d38840a6e2af0f6d1fa420b32038a70d810c7036303f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
