export const name="ice_skating";
export const id="dl_0e0f81f183e6b2d4f847";
export const url=new URL("../icons/ice_skating.svg?v=8479571bd498aebc272c999b08240bddf465b3e4266d881c691c93bd94026500",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
