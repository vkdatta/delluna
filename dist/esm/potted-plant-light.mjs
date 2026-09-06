export const name="potted-plant-light";
export const id="dl_9a2014f2a86d46ecbbf0";
export const url=new URL("../icons/potted-plant-light.svg?v=2e5f4015e53976bd4450d7dbccd2d72bb22181af90f3df0e33135ff03603c77f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
