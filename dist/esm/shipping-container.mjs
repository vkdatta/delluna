export const name="shipping-container";
export const id="dl_4ea0a20cc72d429c881e";
export const url=new URL("../icons/S/shipping-container.svg?v=0f70a9d8534e0c16af425fa03a4282372da2c2a0101049d088e0e913ea8c8d5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
