export const name="sms-fill";
export const id="dl_8d5e3f7fb2164607b579";
export const url=new URL("../icons/sms-fill.svg?v=46f3e4808faf5279b784c6e245e922fac0ca62046832490b6dade99db7313afa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
