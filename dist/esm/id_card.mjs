export const name="id_card";
export const id="dl_b62f0f0749d840808093";
export const url=new URL("../icons/id_card.svg?v=65d0e2cd9e77515641fc1d3fd31f0c251b273246d34e2da5eb7eb7e2c4feb8d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
