export const name="dashboard_2_gear-fill";
export const id="dl_e42acd25aacd622bdeba";
export const url=new URL("../icons/dashboard_2_gear-fill.svg?v=b511d0b3b2aee75ae5179911c10bce54ac30fc3d83b6b880b13fb6c475ffbf30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
