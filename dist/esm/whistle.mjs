export const name="whistle";
export const id="dl_f30d64eed99549b3ad82";
export const url=new URL("../icons/whistle.svg?v=bb0425877bc82693693a24772b96f61aa3dd989ef2da0d0559576263d65b4e36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
