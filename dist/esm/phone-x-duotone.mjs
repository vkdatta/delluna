export const name="phone-x-duotone";
export const id="dl_9661f4f60278455f8d70";
export const url=new URL("../icons/phone-x-duotone.svg?v=9236769374432a2e1901fd71ff9ec27c1547833c32e331ac5dcbf96391b55e38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
