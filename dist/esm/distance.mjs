export const name="distance";
export const id="dl_bbff4b882977a9192401";
export const url=new URL("../icons/distance.svg?v=fecfb61848f86c53c8d995b338c1ddcccf5d240ce0b2188706aadc0797d2b2a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
