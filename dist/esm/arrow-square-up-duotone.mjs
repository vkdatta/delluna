export const name="arrow-square-up-duotone";
export const id="dl_4ace8b0ea33548baabeb";
export const url=new URL("../icons/arrow-square-up-duotone.svg?v=b241f1ab3ad6541d67d6b642f773d6bd5615e65557f6d0369d955ba08c7deb04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
