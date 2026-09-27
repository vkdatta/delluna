export const name="mode_of_travel-fill";
export const id="dl_a9e77d9084143a94d902";
export const url=new URL("../icons/mode_of_travel-fill.svg?v=2d0dd2bc71c90f3bc037289dedc9391792fea5d5489c2ad5bf251e931c9631df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
