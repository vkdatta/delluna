export const name="stroke_partial-fill";
export const id="dl_1d8471013d92340b4c78";
export const url=new URL("../icons/stroke_partial-fill.svg?v=42a928f07874cdca07643f5c1281d05d1f360d8e1cb8c709230fdb9a68992f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
