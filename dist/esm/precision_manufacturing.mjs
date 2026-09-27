export const name="precision_manufacturing";
export const id="dl_c8ffaf729e14c5690556";
export const url=new URL("../icons/precision_manufacturing.svg?v=ab1556a9fb226146acadd8b93cc49aa24ec8fd272350068a8fa16546cb87a2dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
