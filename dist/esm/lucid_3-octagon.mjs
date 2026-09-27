export const name="lucid_3-octagon";
export const id="dl_4f97102569904f4fbdca";
export const url=new URL("../icons/lucid_3-octagon.svg?v=45cf7a50c93ef03db7e3e9b2dd9ef8e570d8e7556156be1a8195dffdcdad3ec4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
