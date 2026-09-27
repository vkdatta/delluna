export const name="champagne-light";
export const id="dl_4f7303904c5c404ea9f9";
export const url=new URL("../icons/champagne-light.svg?v=51d2b01db72378ba874555e404527c7a2560b29478af2da611c251f6b80d695c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
