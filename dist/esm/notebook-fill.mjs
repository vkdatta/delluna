export const name="notebook-fill";
export const id="dl_a5cde38682d1474e8fbf";
export const url=new URL("../icons/notebook-fill.svg?v=1d42cb3f20d4126a063eaa618459c307e51511ce47b350d94029ab323a13d142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
