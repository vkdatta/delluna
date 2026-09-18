export const name="flaky-fill";
export const id="dl_645c57c006a44d3d8dd0";
export const url=new URL("../icons/flaky-fill.svg?v=462cd9854bdab0614edd8748f428b5dc8e2a9b3923999515780120848ca19187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
