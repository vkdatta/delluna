export const name="directory_sync-fill";
export const id="dl_0623976cbf2ea0995ff7";
export const url=new URL("../icons/directory_sync-fill.svg?v=0f6ccf57a0cbd51f2dd64746220cb76376f2e30e0e06513971d3c9b2bd68214f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
