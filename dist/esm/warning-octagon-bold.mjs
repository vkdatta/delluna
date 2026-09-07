export const name="warning-octagon-bold";
export const id="dl_e9379f3b8aa34edc8957";
export const url=new URL("../icons/W/warning-octagon-bold.svg?v=7e703f812b755054fa441157e27df9e7b3790169e65ccedd1682be76b37e867d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
