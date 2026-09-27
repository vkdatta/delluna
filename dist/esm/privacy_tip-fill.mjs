export const name="privacy_tip-fill";
export const id="dl_45ddc5fc71d185a7ba13";
export const url=new URL("../icons/privacy_tip-fill.svg?v=8764a67e55b986a62d8b45f8faf8b509d5545ad91316b01529a0b8b1f4914341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
