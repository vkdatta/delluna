export const name="concierge";
export const id="dl_3400442ca58743659727";
export const url=new URL("../icons/C/concierge.svg?v=8eba2d94627548cfc945a91a78a6b764f9a02b21237b240b8be5d1518289d437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
