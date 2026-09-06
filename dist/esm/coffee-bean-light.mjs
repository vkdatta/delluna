export const name="coffee-bean-light";
export const id="dl_43c776f958d64c6fb99e";
export const url=new URL("../icons/coffee-bean-light.svg?v=0edb0746e62af0e136877902d1e17aa93daa46cb018d51468fd9e2ba53d114b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
