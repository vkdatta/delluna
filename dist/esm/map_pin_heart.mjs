export const name="map_pin_heart";
export const id="dl_a38e90345d7db94c0644";
export const url=new URL("../icons/map_pin_heart.svg?v=0a29c0da6e40830754ccf4858ee8c91d8576810d1c170a50c5b24728e9ab36b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
