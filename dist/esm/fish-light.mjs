export const name="fish-light";
export const id="dl_860e3cddd1c949859888";
export const url=new URL("../icons/fish-light.svg?v=a956ce326c659d45eefdb79380a2ccce17a326fe0ba3f4a2a195dd1257caa2a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
