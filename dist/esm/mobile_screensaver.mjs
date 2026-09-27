export const name="mobile_screensaver";
export const id="dl_12ac6b9ebc39d2c81d68";
export const url=new URL("../icons/mobile_screensaver.svg?v=8086fe22c3c533d6e82bea8616b56e992923b0356ae50680d98e7694d132756b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
