export const name="usb-duotone";
export const id="dl_8fb904b66bae185024b7";
export const url=new URL("../icons/usb-duotone.svg?v=3f720e47d008fea41a6b484b9452a4148fd4d56f777a1d02e65c81adda11ce46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
