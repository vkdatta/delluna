export const name="slideshow-duotone";
export const id="dl_723c5460482e9c213f86";
export const url=new URL("../icons/slideshow-duotone.svg?v=775f7f8c60166796db6dc39c93b2d6b9c9671d53304168ab8956d2d99a435bb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
