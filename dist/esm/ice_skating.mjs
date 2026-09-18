export const name="ice_skating";
export const id="dl_23f81fdc90d04a63b04e";
export const url=new URL("../icons/I/ice_skating.svg?v=dfbb62a1b43b96625f9107776fd39e56bdf4fa2441bb1a1b4267054c5c31f226",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
