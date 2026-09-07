export const name="graduation-cap-duotone";
export const id="dl_1af1dcc91caa48a2bf88";
export const url=new URL("../icons/graduation-cap-duotone.svg?v=83f2327ca5d41d02b601b41a7d127961890c4495e7dfd1c5ccdd77c5c3eee5f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
