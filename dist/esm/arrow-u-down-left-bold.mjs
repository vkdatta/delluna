export const name="arrow-u-down-left-bold";
export const id="dl_f16b99315f71422093b3";
export const url=new URL("../icons/arrow-u-down-left-bold.svg?v=20bb7a0657e724da360f35d2d283a7cad242583ed6a98d791eacfcc2c3a2fff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
