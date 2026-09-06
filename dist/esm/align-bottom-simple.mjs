export const name="align-bottom-simple";
export const id="dl_5d0ba48ae98c44a0aeda";
export const url=new URL("../icons/align-bottom-simple.svg?v=43f75236e9558097f9266cdc8591af60474c31fcb7df0348280449fe5bb22e9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
