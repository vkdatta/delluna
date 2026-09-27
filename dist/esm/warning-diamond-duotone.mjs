export const name="warning-diamond-duotone";
export const id="dl_10585ee8118d22a8ec75";
export const url=new URL("../icons/warning-diamond-duotone.svg?v=aad33c4cf1f08551f0b050897e7e8dd66ba1ba934037336592545024fa5a8807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
