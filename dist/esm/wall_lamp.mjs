export const name="wall_lamp";
export const id="dl_522cde17f9dbb2c61e0d";
export const url=new URL("../icons/wall_lamp.svg?v=2dc8ec512f08c4c21f789d8d8c08f8c3615a0f2ee1c50331971ab626b7ba0f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
