export const name="hands-clapping-fill";
export const id="dl_a4a8806f2c864f3a8d29";
export const url=new URL("../icons/hands-clapping-fill.svg?v=e2597cc6ebfdab9c23cb2a733c15ddc83ac1f4dc39f835fbabe659b6b934ceb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
