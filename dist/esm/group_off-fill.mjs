export const name="group_off-fill";
export const id="dl_1be07a330f434887bdaf";
export const url=new URL("../icons/group_off-fill.svg?v=a49ff7ea7cbf2084b6893c76231f78b2efc7a2c80ab20b9c8d9427c4434fb947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
