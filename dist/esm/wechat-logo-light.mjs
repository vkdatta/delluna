export const name="wechat-logo-light";
export const id="dl_1d437a41191c4123af33";
export const url=new URL("../icons/W/wechat-logo-light.svg?v=2c6d159834a19cac04a06ea4cd64628b59074404c69e6942660dc376d14216a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
