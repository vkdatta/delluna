export const name="tooltip-fill";
export const id="dl_ae735e0bc985333fb530";
export const url=new URL("../icons/tooltip-fill.svg?v=57759da2397e0da9798539613763e76f11853d327d376abbac2cf07c5a61583d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
