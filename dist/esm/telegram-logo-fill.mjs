export const name="telegram-logo-fill";
export const id="dl_d4a54d5ae54e4dd5a71d";
export const url=new URL("../icons/T/telegram-logo-fill.svg?v=4e1631d499b9f6b8118657eddd3a4b943cd680b6359c5d45327b1d1543675d5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
