export const name="universal_currency_alt";
export const id="dl_008035983fca0c729663";
export const url=new URL("../icons/universal_currency_alt.svg?v=3e5e8e22e1f32fcb56f0908e9532b0f24ebd5738f858f619085ca9213bbe9ac0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
