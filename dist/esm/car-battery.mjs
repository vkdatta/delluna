export const name="car-battery";
export const id="dl_88f05b14c90944f9b6d9";
export const url=new URL("../icons/car-battery.svg?v=5a6df45603c055531f69bfac4b1763dbbf2f7f8d8b5dac30e4f4a77aba9e8f1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
