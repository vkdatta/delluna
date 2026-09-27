export const name="shield-chevron-duotone";
export const id="dl_80fab19205941825d150";
export const url=new URL("../icons/shield-chevron-duotone.svg?v=b23919ab8e4db3a22b2b5e593f10639bed19eafba8ed7f322d1dcd0ea84af78e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
