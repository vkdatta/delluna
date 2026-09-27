export const name="compass";
export const id="dl_dbe3efeb59d7452780a9";
export const url=new URL("../icons/compass.svg?v=e0ed51618f27d23b8d801697c970d3d247b4f76c13bb94fcc9588d1acb00723d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
