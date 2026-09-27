export const name="chart-pie-slice-duotone";
export const id="dl_611c0b424fab45b49c30";
export const url=new URL("../icons/chart-pie-slice-duotone.svg?v=b597659639b273992a2dccf67442c1cedb57abb43b02cf18961f14b4931c2557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
