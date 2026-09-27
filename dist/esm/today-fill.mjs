export const name="today-fill";
export const id="dl_9d49b1c555f78472dcf3";
export const url=new URL("../icons/today-fill.svg?v=4571a880eb3d4661fea0392281e1f3925edd86f26c99cb67764adc2242f3c12d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
