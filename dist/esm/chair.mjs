export const name="chair";
export const id="dl_dd8d2a0dfd2044cc8bad";
export const url=new URL("../icons/chair.svg?v=c198f8d0c68a7b50d85ad6b6d3e16f23851d15cabaeaddff4ac7c3ba4adcfb65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
