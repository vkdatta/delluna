export const name="link-simple";
export const id="dl_9f66f74368374f7e8f8a";
export const url=new URL("../icons/link-simple.svg?v=1d395c5f03bcff5a4fdd11b7d376f25bbf7b45908581184c166ec25aeb6d4551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
