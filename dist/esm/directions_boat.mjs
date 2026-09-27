export const name="directions_boat";
export const id="dl_0e92179fe2101dbd886c";
export const url=new URL("../icons/directions_boat.svg?v=0dcfb4f7b50dc64adfcbb2540b0be35d45f0444fa7f75c3a7e1843fceb8e0feb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
