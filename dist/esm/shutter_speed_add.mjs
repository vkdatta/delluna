export const name="shutter_speed_add";
export const id="dl_7cbb2a2d1a4ae1dbebd6";
export const url=new URL("../icons/shutter_speed_add.svg?v=10fe373cdacb263d8962ca73a2d16c9312bb97d1babadb4d26a1c125b6f2af99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
