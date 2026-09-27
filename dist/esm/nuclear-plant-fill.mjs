export const name="nuclear-plant-fill";
export const id="dl_3d5e5609415c4da7b532";
export const url=new URL("../icons/nuclear-plant-fill.svg?v=84aabad7568055479623ba0803a8af28af37931bb851948efe9cf4e6a1b83a7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
