export const name="group_add-fill";
export const id="dl_d976dfbcf07ce8bbfdd4";
export const url=new URL("../icons/group_add-fill.svg?v=08cee0deafc22eb7734c41319bf593bb68a9e3d718e8ea06ed4b5df7dcb680c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
