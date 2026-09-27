export const name="cycle-fill";
export const id="dl_dfdfc504e3830af11636";
export const url=new URL("../icons/cycle-fill.svg?v=1146204610880e5b9c7e0500a4b3d176c9524b8ad3922f0afafd748967e31c38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
