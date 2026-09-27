export const name="mobile_text_2";
export const id="dl_ed4b7f22ee7fc434236e";
export const url=new URL("../icons/mobile_text_2.svg?v=578b251b338540469eb02ae75be9ffdd31e2a3c35db4f67763e3ee388bf32169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
