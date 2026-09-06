export const name="radical";
export const id="dl_1f83da303a2940b09e80";
export const url=new URL("../icons/radical.svg?v=3dec0310c98d6ee9ae690064806d40ec16560b929561b47ff6fba76c47e73399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
