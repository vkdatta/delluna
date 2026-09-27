export const name="no_backpack";
export const id="dl_65cfcc355b8d175c1476";
export const url=new URL("../icons/no_backpack.svg?v=9f7bd01a72291fbe37f5114d7d8c8e9989a7729dd24c507ffbcbed03da308543",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
