export const name="potted-plant-light";
export const id="dl_9a2014f2a86d46ecbbf0";
export const url=new URL("../icons/potted-plant-light.svg?v=f492828ef941a8daaf28e29e65ec77d34fa6ece51e63a01cd42331cd2cd03611",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
