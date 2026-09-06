export const name="lucid_3-octagon";
export const id="dl_4f97102569904f4fbdca";
export const url=new URL("../icons/lucid_3-octagon.svg?v=7f54666b86a4f29dd8d9c9a2f57944613456de591036140161528b61533ec7ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
