export const name="cloud-fog-duotone";
export const id="dl_a42739cf8228451a87ad";
export const url=new URL("../icons/cloud-fog-duotone.svg?v=c8e52a845fdcc97e9b81eb5cdb43188dab1003828339c04eb782dd86381b44f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
