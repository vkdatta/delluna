export const name="sword_rose-fill";
export const id="dl_fef67827d8f14d55a070";
export const url=new URL("../icons/S/sword_rose-fill.svg?v=b64cbc022241dc63b5212dc155544a8826db459cd0353d8fe2400b927b181adc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
