export const name="bed-duotone";
export const id="dl_26d0b4f6ebc04a868725";
export const url=new URL("../icons/bed-duotone.svg?v=d2fde2c7670f0d9e075a1ee3538d4feeebc131a599b6888aba666f279c0e340d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
