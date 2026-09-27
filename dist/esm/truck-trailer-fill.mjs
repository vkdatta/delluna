export const name="truck-trailer-fill";
export const id="dl_c6d6cbf56bacf738abf2";
export const url=new URL("../icons/truck-trailer-fill.svg?v=ec5c5fd0a73ba23b67cce53a892d59a7a03fd09e48a71bf434af3a8f8e41c181",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
