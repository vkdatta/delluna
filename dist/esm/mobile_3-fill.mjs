export const name="mobile_3-fill";
export const id="dl_bf823205b6fb6766aa99";
export const url=new URL("../icons/mobile_3-fill.svg?v=aef2db30d6dd467c6ecb7c25c8b5948d3816364a76579200eaafcefe1829b12e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
