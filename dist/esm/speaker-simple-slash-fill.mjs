export const name="speaker-simple-slash-fill";
export const id="dl_3ccc00f54f0444d2872c";
export const url=new URL("../icons/S/speaker-simple-slash-fill.svg?v=0811b90dc411ef71331cd2b9b6f4aae9de3d119cdf60cfac281de47fa3c68015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
