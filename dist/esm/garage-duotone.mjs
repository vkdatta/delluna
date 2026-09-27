export const name="garage-duotone";
export const id="dl_3eb41562cc854e6a9183";
export const url=new URL("../icons/garage-duotone.svg?v=2caa1f3dd0189788a9a75afd833995daa6bff92c12eac77471f5920f777194db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
