export const name="arrow-u-down-left-bold";
export const id="dl_f16b99315f71422093b3";
export const url=new URL("../icons/arrow-u-down-left-bold.svg?v=c47fbcdefa5002d22e3c78c558dee526946f1566fa4a205965deb0b7058e2348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
