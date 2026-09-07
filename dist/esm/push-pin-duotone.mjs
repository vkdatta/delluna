export const name="push-pin-duotone";
export const id="dl_31a21606006a49d4a50e";
export const url=new URL("../icons/push-pin-duotone.svg?v=b558ce57300e6d9108d525d045d63e1de64f575bcdaf4772f7f019f7b12000bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
