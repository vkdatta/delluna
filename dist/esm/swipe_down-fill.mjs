export const name="swipe_down-fill";
export const id="dl_af42efb096bd046243b6";
export const url=new URL("../icons/swipe_down-fill.svg?v=ab927db2a2df89683110c46166056ba69b4d80151dde0425cd987ca8d08b477d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
