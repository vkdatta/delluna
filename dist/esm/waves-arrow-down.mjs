export const name="waves-arrow-down";
export const id="dl_f1c4747891b2497b92e3";
export const url=new URL("../icons/waves-arrow-down.svg?v=3ef3b2d6e74c2cc3f174433d205f7d21d3de807c1482c4edc07fc8fca654afb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
