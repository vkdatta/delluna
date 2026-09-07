export const name="pause-circle-fill";
export const id="dl_970eebf0ae554636a592";
export const url=new URL("../icons/pause-circle-fill.svg?v=0e38d249ff7534fe8b52b060627972f89f2f2d232a4f10e341fc576cc79ca54c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
