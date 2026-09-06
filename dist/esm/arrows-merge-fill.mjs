export const name="arrows-merge-fill";
export const id="dl_4ebb23f9489a41cc806b";
export const url=new URL("../icons/arrows-merge-fill.svg?v=dfb104d141c82a22a1884dbb94c834c4a1ba3b3a245e97b6954d84998c8763bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
