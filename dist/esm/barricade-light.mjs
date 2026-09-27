export const name="barricade-light";
export const id="dl_dae4e460d09646c5a623";
export const url=new URL("../icons/barricade-light.svg?v=c458310473d7bd48579c3e3c9c690e51d5988fb6b68cb0d3f9987fd4379acae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
