export const name="solar-roof";
export const id="dl_786d7dee35023bb0c480";
export const url=new URL("../icons/solar-roof.svg?v=1b11dedfb3875d171743143c1a4d9da0377011b745289fee223d0ffb14d804a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
