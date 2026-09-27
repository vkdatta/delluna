export const name="park-duotone";
export const id="dl_8ddafb2ddc9444eead1c";
export const url=new URL("../icons/park-duotone.svg?v=418c22b2345ee62541d4f3416ce2543e6e8875318e9e0309331c98f2ff6240d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
