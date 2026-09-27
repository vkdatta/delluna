export const name="shipping-container-duotone";
export const id="dl_2319fcee6e97ab61106c";
export const url=new URL("../icons/shipping-container-duotone.svg?v=1afc5d529cc94765d0cf1bf2b8125ab88a0f7ae72bbd117bc776074ca7aef5a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
