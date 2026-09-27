export const name="mobile_layout";
export const id="dl_aeced616258420d612ba";
export const url=new URL("../icons/mobile_layout.svg?v=965ef918d9d55ff712faf7a95dddb06bc9bf2f533ecc6f19d0f9ba114b34317b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
