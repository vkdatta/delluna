export const name="dropbox-logo-light";
export const id="dl_4908420761804dc5977b";
export const url=new URL("../icons/dropbox-logo-light.svg?v=d73b6cf38b05aed79fc81d260a2458ea3a6b6f1add2144985cdfb57ac80a7ee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
