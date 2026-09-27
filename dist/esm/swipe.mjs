export const name="swipe";
export const id="dl_e80cdca6f0c58cc224d2";
export const url=new URL("../icons/swipe.svg?v=f5cb80028ee92758fb13c2cd681e9ac86b08e0b287e1f2f7be2acba25f0ef850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
