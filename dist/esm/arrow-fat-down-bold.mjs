export const name="arrow-fat-down-bold";
export const id="dl_e4ae3224500f4d88b8a4";
export const url=new URL("../icons/arrow-fat-down-bold.svg?v=dd6ee44a822a21ee50ba44d8da55424e4e6157f5c3911974f6995da372b45339",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
