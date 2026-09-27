export const name="bookmark-simple-duotone";
export const id="dl_f7bd74c59a7d4e5e9aef";
export const url=new URL("../icons/bookmark-simple-duotone.svg?v=de255ed0c6856d8bc93ec4ab17c079a98d18b4ea3c379f4ef6c2b2ce14871c6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
