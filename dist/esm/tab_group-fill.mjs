export const name="tab_group-fill";
export const id="dl_1ef4f4247e1b4322a0bf";
export const url=new URL("../icons/tab_group-fill.svg?v=070cf9b67e7ef34588fdb743ee4486d5d09df706c8703c7a3112fcba766a2fae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
