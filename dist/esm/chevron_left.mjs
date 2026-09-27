export const name="chevron_left";
export const id="dl_5ffdff5a1ea56855ec87";
export const url=new URL("../icons/chevron_left.svg?v=90b2f11c45de990ce3006f3427b303574aa5481fc0f484d31a1e35665118959a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
