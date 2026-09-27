export const name="swap-bold";
export const id="dl_c03d3173665f0348d534";
export const url=new URL("../icons/swap-bold.svg?v=a9f61d7505ad7b0e49744fca71f836f8bb7760124f430dda768c55f2a334301b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
