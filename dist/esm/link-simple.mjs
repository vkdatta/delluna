export const name="link-simple";
export const id="dl_9f66f74368374f7e8f8a";
export const url=new URL("../icons/link-simple.svg?v=7a97dad4b2f16c3a386ea69ba78d29bf3a71c311f2e34100d79143559ba13151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
