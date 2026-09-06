export const name="panorama-light";
export const id="dl_026b8d7d8ce6409c9b0c";
export const url=new URL("../icons/panorama-light.svg?v=21af0e63803ce774ca08f5be7661103e29fc90b4c43e276c003b6b2861e9d47c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
