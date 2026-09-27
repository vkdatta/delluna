export const name="ny-times-logo";
export const id="dl_4a1bedfbbfa54654b67b";
export const url=new URL("../icons/ny-times-logo.svg?v=ab135ccce70eb4a157932fa2691fdebbd53be62e97e24c836dff34ee09f1ed36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
