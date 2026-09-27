export const name="shipping-container-thin";
export const id="dl_1d33fb26d3f853165417";
export const url=new URL("../icons/shipping-container-thin.svg?v=21dbff883242b8d9fd5e63b201d4960890d0778221977d7524136670486f179b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
