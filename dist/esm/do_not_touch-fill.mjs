export const name="do_not_touch-fill";
export const id="dl_b035e4c689304c82be56";
export const url=new URL("../icons/D/do_not_touch-fill.svg?v=5e2242639bb9f17ec2ae2a934c86e119287d8cdf7fbf1267c874173e664249be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
