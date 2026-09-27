export const name="currency-dollar-simple-thin";
export const id="dl_28276d2b827841df85e7";
export const url=new URL("../icons/currency-dollar-simple-thin.svg?v=1fe2e9caed30bb29eb85750d14ffef9393eac6fd0b2d6bf7c866b1fe2fd0f499",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
