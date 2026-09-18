export const name="landscape-fill";
export const id="dl_55a3e2bce4bd45f790d2";
export const url=new URL("../icons/L/landscape-fill.svg?v=2157e343da4c374de6c9ea84ca085ed6165a3e822ee1c78249d3bd4f94c9b81c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
