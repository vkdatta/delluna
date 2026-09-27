export const name="cash-register-thin";
export const id="dl_b9a18f43dd3a45558ced";
export const url=new URL("../icons/cash-register-thin.svg?v=efc225e74ea775fe2502c3dad5f1f274523ad54731d8394d6c88c08ed0dedb41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
