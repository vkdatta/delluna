export const name="memory-fill";
export const id="dl_db945657a2014f06a1fb";
export const url=new URL("../icons/memory-fill.svg?v=d11bcfba314fe9b1448862666a07fafb5e2c5658d5219fd4947b36c64835c9c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
