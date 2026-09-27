export const name="handbag-simple-fill";
export const id="dl_9386946fa35043a7a24e";
export const url=new URL("../icons/handbag-simple-fill.svg?v=59d33f4cc21cffcf91d1b5035eaab6ae6104dbff44c4ab59df5cc04eff8250dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
