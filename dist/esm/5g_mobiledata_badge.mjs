export const name="5g_mobiledata_badge";
export const id="dl_39995decf8678f397b9c";
export const url=new URL("../icons/5g_mobiledata_badge.svg?v=2d3e9792beb8aa4482fbbc11d7e4b4b2f741f5b7da141decb968c98774bd3720",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
