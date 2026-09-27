export const name="address-book-tabs-light";
export const id="dl_699ebe4b3c10472785ac";
export const url=new URL("../icons/address-book-tabs-light.svg?v=dacbcfe27a46a0ef56900cc32bca976986b41f33cc48bba8d858f6c9fadf132d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
