export const name="reviews-fill";
export const id="dl_c236b306ebff7c4afd13";
export const url=new URL("../icons/reviews-fill.svg?v=673a8ac47e811fb6b65b6132a9648150db68fce2661cba4262be2524533ff01c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
