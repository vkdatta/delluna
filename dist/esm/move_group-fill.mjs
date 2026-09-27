export const name="move_group-fill";
export const id="dl_8a7a08fb0a8c3e346246";
export const url=new URL("../icons/move_group-fill.svg?v=64e237d94b8b3e2dccb03c2a470d927306243758e2c60ba133628c86050e186c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
