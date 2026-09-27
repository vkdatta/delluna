export const name="pin_drop";
export const id="dl_812d8a450d5627895aed";
export const url=new URL("../icons/pin_drop.svg?v=710155e62cf87b2ee16c2449f765b8e54e7858e4e35730ac7a16c6ec5514a164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
