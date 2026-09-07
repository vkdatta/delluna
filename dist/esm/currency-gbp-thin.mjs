export const name="currency-gbp-thin";
export const id="dl_cc739de6adb34919b2b0";
export const url=new URL("../icons/currency-gbp-thin.svg?v=293960fbe0d76462b0711fa3b83ef769461c0a647fe9cd0f672c57935c04d991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
