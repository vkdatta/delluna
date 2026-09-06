export const name="magnet-straight-light";
export const id="dl_29034afdff1744439314";
export const url=new URL("../icons/magnet-straight-light.svg?v=ff673878b005ea0e842c0588e6bf32e176f98d0dc841b484ef0356aeaa2ee409",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
