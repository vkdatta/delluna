export const name="arrow-square-down-right-bold";
export const id="dl_570894301d06477a930f";
export const url=new URL("../icons/arrow-square-down-right-bold.svg?v=3c30ab20494cf239133fefd9701fddc82bcde103f87c4acd8a7c8036cdf2ea39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
