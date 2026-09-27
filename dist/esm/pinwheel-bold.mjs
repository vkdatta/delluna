export const name="pinwheel-bold";
export const id="dl_adb605a91a5041f88fb8";
export const url=new URL("../icons/pinwheel-bold.svg?v=52109ba053012266ab7edf9b86e9055eeb76c61f0bb071068ad194218bff9f39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
