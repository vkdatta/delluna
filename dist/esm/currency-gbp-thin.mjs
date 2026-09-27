export const name="currency-gbp-thin";
export const id="dl_cc739de6adb34919b2b0";
export const url=new URL("../icons/currency-gbp-thin.svg?v=e7a9d98c7cd1394b33d805190df011c5d15facb9bcf54c33ddfbf3721309f03e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
