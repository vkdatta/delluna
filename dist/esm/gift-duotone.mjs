export const name="gift-duotone";
export const id="dl_63aae71faf2e4d0180ba";
export const url=new URL("../icons/gift-duotone.svg?v=52cb9c20113da9d81e7f297f491d2a146d169ad34f57552d1a8d9bb121547bde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
