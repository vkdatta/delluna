export const name="shopping-cart-light";
export const id="dl_6cf4ba7211cf02cdd912";
export const url=new URL("../icons/shopping-cart-light.svg?v=6ac0082de94eadf02e31f9789a559e114d5ea15527fca4c614becdf59bcba6b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
