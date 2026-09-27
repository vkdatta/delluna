export const name="sword_rose";
export const id="dl_b46490be5a6854ea619a";
export const url=new URL("../icons/sword_rose.svg?v=bc0fa24312184bfa90ae68c217e89f9571c2956a593fa6e599f9c2873604b910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
