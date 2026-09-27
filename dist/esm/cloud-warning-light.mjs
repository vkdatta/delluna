export const name="cloud-warning-light";
export const id="dl_50d5a556cfb64f279037";
export const url=new URL("../icons/cloud-warning-light.svg?v=4102b16299f647e0f16c25fed77c62e517d7ceb157337ace29eb54212ef63f4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
