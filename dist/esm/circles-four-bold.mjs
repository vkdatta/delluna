export const name="circles-four-bold";
export const id="dl_44ab3285f2a44d5c93c7";
export const url=new URL("../icons/circles-four-bold.svg?v=ca660fa99384475f30ba7ba24cf5e10be7cf624618d271010929596066ecc16f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
