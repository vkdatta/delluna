export const name="text-subscript-light";
export const id="dl_920efd0f19ad992b9bc6";
export const url=new URL("../icons/text-subscript-light.svg?v=5958fb10678d0ffe80709345a70b737c029e7d8e5c50e332fba3b3a0683ed8f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
