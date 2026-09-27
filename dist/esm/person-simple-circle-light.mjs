export const name="person-simple-circle-light";
export const id="dl_31d86dd0e516494eb6cd";
export const url=new URL("../icons/person-simple-circle-light.svg?v=15504760941bd6ddc55dc628d9907128753e850e7d3963adf5736b62fa3eb666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
