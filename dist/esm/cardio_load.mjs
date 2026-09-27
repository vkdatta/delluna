export const name="cardio_load";
export const id="dl_538ffa11d0e36d92ad96";
export const url=new URL("../icons/cardio_load.svg?v=5b2f752763209bc49af55ee42461042211a1c4d144a91fe701763510459c0df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
