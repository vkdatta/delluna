export const name="monitor-arrow-up-duotone";
export const id="dl_e7a7cfac107b40339a96";
export const url=new URL("../icons/monitor-arrow-up-duotone.svg?v=0df7d6fbacec7aaafd9374d3154bb85f7333fae9829d882c1eeb1d0ae5cfd46d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
