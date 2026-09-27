export const name="crosshair-thin";
export const id="dl_b9dc80e090f54d478e72";
export const url=new URL("../icons/crosshair-thin.svg?v=df9fae445b9961b419fa056482d118b23e01fa8bb323c0d4cee654dfd645227a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
