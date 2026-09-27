export const name="nest_remote_comfort_sensor-fill";
export const id="dl_caa3781ac4d705025014";
export const url=new URL("../icons/nest_remote_comfort_sensor-fill.svg?v=604d8ce9b27863925d116a01519e7a2dd0c03c8a0f104dd36738744a098e8e17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
