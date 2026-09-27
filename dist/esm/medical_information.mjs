export const name="medical_information";
export const id="dl_790a222a094c30d5d3a5";
export const url=new URL("../icons/medical_information.svg?v=9888fba730d97e87723e781e31aedfbcb38ae06d82ad125c4b9d5dc930f6013f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
