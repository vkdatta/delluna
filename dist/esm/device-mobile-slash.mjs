export const name="device-mobile-slash";
export const id="dl_10a39e5c0cb349c28271";
export const url=new URL("../icons/device-mobile-slash.svg?v=03f4affe180da73ca143d135daccfa7422ca16917ae6a07f5c250a670eb37ca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
