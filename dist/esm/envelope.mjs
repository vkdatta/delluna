export const name="envelope";
export const id="dl_bd33395556a14141a411";
export const url=new URL("../icons/envelope.svg?v=1cacf2964607ad27bcb6c55117e5c7275cfb3c206f799b720f095b63965efdc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
