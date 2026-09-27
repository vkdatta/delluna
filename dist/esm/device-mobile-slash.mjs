export const name="device-mobile-slash";
export const id="dl_10a39e5c0cb349c28271";
export const url=new URL("../icons/device-mobile-slash.svg?v=03a7ef2d9a00c1b5d7fc304b3de61c37c7b7c02132611469e6134cf69fa4bb0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
