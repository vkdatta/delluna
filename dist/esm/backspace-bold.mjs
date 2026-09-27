export const name="backspace-bold";
export const id="dl_d22a9c672aaa4e69b030";
export const url=new URL("../icons/backspace-bold.svg?v=80ad01002357fcbdfbea02c47245bcd9b4685307d13a7371a4dc69b065b25f5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
