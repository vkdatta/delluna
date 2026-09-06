export const name="codepen-logo-light";
export const id="dl_cd11a043b38c472292b6";
export const url=new URL("../icons/codepen-logo-light.svg?v=c372ab6ca9b5cf1bfb08ebd3ad9be2d75b756edb945e6f4207d5f79db41f13f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
