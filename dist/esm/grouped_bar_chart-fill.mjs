export const name="grouped_bar_chart-fill";
export const id="dl_c098bc226e154d62a067";
export const url=new URL("../icons/grouped_bar_chart-fill.svg?v=70a39feffc57f8f84653c8b97dab73d909916f55884d2638beb9699258796e85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
