export const name="user-gear";
export const id="dl_a3069b451537235e5b66";
export const url=new URL("../icons/user-gear.svg?v=61f471d286edd5ccae88a9552836da616abbf57ea77b12185e9c30bc2523f522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
