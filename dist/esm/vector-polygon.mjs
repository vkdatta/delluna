export const name="vector-polygon";
export const id="dl_9938956ba478471b8207";
export const url=new URL("../icons/vector-polygon.svg?v=0ecc8be33e36d787433f638123865e09aca7e0c39c5d70ed7e455d1d7c9416a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
