export const name="ev_mobiledata_badge";
export const id="dl_16ea29dc06fe7bd23389";
export const url=new URL("../icons/ev_mobiledata_badge.svg?v=b503440bec04f7f46e6b2ea4a192768de686c6df728bb8108b44615c7c5c66bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
