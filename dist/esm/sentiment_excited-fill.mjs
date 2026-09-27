export const name="sentiment_excited-fill";
export const id="dl_e668539aec234c9dadca";
export const url=new URL("../icons/sentiment_excited-fill.svg?v=650f531edecf5e89784943c37e6d635dce06cff883123d71657078e74a6263b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
