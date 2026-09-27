export const name="window";
export const id="dl_1dc78726f43e41e592d5";
export const url=new URL("../icons/window.svg?v=428295b6647f174023302fbab5ae06a3631d14e418be2bf0d3eed271c37e0d5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
