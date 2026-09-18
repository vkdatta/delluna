export const name="door_front-fill";
export const id="dl_2936a3ebb71b4012b850";
export const url=new URL("../icons/door_front-fill.svg?v=97d2aff328e9d9c63e027f80cca2f22afb35a46c59c6b3b4422ef9f0fc7e4d06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
