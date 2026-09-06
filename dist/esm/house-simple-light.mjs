export const name="house-simple-light";
export const id="dl_5dcb858eac16469c8f75";
export const url=new URL("../icons/house-simple-light.svg?v=bb1f14cda5f505e2a462bfe641fcede85132186f04abe3f921b79045a2fed78d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
