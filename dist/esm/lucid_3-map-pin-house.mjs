export const name="lucid_3-map-pin-house";
export const id="dl_f44c75fa5baa4473a90a";
export const url=new URL("../icons/lucid_3-map-pin-house.svg?v=97a80b7a6aae269c5f30c99e1a0a06dafeb84a3fad5fd4dee2bc3c707957eea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
