export const name="users-three-fill";
export const id="dl_fd167944073f670d7413";
export const url=new URL("../icons/users-three-fill.svg?v=c2af588643b2c2b77ff600af211f415e5ac5d1c90a69786019ee1282c036ce9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
