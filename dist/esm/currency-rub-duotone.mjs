export const name="currency-rub-duotone";
export const id="dl_ab2e6a66a1d247e6a31d";
export const url=new URL("../icons/currency-rub-duotone.svg?v=7256e4860e28cf6af6a3c4ef79c9b9cba045536666dc5c951692a224b6f4816e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
