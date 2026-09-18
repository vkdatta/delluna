export const name="swipe-fill";
export const id="dl_3e126684a79745a6a773";
export const url=new URL("../icons/swipe-fill.svg?v=2e0d6047370e65e20dfbd9f2e54c9d59d17414e95a1e748f171febf61fef5d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
