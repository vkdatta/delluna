export const name="arrows-left-right-duotone";
export const id="dl_80dcd22ccb0a4081832c";
export const url=new URL("../icons/arrows-left-right-duotone.svg?v=da988a32d798a3c56f745d7f24315efbdc7704c46ae9deaf5d00cecd896d5189",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
