export const name="map-trifold-duotone";
export const id="dl_1c79f290001544d2ba5a";
export const url=new URL("../icons/map-trifold-duotone.svg?v=50035eb7d4e5e2b785db74ea3dd1119f5a1112a8d8e16684cc5fcd12517d56b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
