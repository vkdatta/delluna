export const name="line-vertical-duotone";
export const id="dl_e62647e5f4cb43b59734";
export const url=new URL("../icons/line-vertical-duotone.svg?v=c72f7015bb9dd7f7530b8634264764de756049a1cf04116dfd3ab3cbf032a84f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
