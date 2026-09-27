export const name="ev_mobiledata_badge-fill";
export const id="dl_622190530407baa31abc";
export const url=new URL("../icons/ev_mobiledata_badge-fill.svg?v=674064981ef9eb24052e2965252b9732f61e05216fa431bae75821b0d0983d5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
