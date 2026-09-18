export const name="swipe_vertical";
export const id="dl_6880d4eb9c284b87985b";
export const url=new URL("../icons/swipe_vertical.svg?v=7535043a3fac0658a1ebcd342a9b2a21098086ab59bc4cb9fc2ef180c4baa2ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
