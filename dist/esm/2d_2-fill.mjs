export const name="2d_2-fill";
export const id="dl_3b3a6d7039e2e8fdb116";
export const url=new URL("../icons/2d_2-fill.svg?v=cf46f8e56617383d7b50fa7dc1322b072a8c6547888adc35d599ba00e7dbe9f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
