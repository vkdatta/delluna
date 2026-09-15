export const name="business_center";
export const id="dl_80f7b784870a45ab8a96";
export const url=new URL("../icons/B/business_center.svg?v=40bf88ed1285e6ddcce381d3008ac879e80aeeff5b04f4c75ae68a7e8c56a3e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
