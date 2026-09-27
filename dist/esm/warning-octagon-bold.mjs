export const name="warning-octagon-bold";
export const id="dl_506ddbe21e8615816e05";
export const url=new URL("../icons/warning-octagon-bold.svg?v=7e703f812b755054fa441157e27df9e7b3790169e65ccedd1682be76b37e867d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
