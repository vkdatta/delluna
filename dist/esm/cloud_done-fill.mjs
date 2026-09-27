export const name="cloud_done-fill";
export const id="dl_4e190ab24d2c84279ff8";
export const url=new URL("../icons/cloud_done-fill.svg?v=5c08b086ccbe7620efdb91758519c081eddddebb2395b4c2366a01588650ae41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
