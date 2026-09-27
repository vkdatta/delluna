export const name="menstrual_health";
export const id="dl_fa31c05632a5583e573d";
export const url=new URL("../icons/menstrual_health.svg?v=3cd4ed27e88b6fd76c11f78fc5aeac6cd9886e04576393c8fde73aa50169750f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
