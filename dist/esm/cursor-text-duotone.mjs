export const name="cursor-text-duotone";
export const id="dl_7fdde463fede4f2c8fe0";
export const url=new URL("../icons/cursor-text-duotone.svg?v=8b0deaa7d1afa0860707580831df130a4e92959f072d85a14c1593496b3dbcc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
