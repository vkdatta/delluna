export const name="shopping_cart_off";
export const id="dl_378ec28ab14201e6e0d1";
export const url=new URL("../icons/shopping_cart_off.svg?v=42847c18c809e15997f133dc64acc6f660a589df5f8898f4b38a2d17b4e3c693",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
