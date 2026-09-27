export const name="medal-military-duotone";
export const id="dl_7c2d0446bf464278949b";
export const url=new URL("../icons/medal-military-duotone.svg?v=6e4db3de721b245ff8c67f1a3c18b1e5f4d4f3accc4e59293d7b5a5fe9df9ee5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
