export const name="full_stacked_bar_chart";
export const id="dl_a72fb42522e657bc3f87";
export const url=new URL("../icons/full_stacked_bar_chart.svg?v=f39586e34e22065be836e612e917bfc64017c4cf577aa00e4197484e41af6fbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
