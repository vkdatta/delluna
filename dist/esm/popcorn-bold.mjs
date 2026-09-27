export const name="popcorn-bold";
export const id="dl_b4be4fae1fa748a18577";
export const url=new URL("../icons/popcorn-bold.svg?v=aa06af0d5d04527bbecbc20ff5a19020cde1b0392377170635a3f25196b3e0ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
