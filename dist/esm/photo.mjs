export const name="photo";
export const id="dl_da891ca3c35c4cfca9ed";
export const url=new URL("../icons/photo.svg?v=b3f30cd44ac508e5e5d40e90d379a5f329b3074bb382c7851e54a4fed0c150ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
