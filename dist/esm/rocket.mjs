export const name="rocket";
export const id="dl_8b002699c8034800bbf7";
export const url=new URL("../icons/rocket.svg?v=fc99cb17922d88f4f2dcb48121998e97c9f3827869809a5dbdd01c726b80e771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
