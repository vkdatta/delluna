export const name="draft_orders";
export const id="dl_848546eab1acd214227e";
export const url=new URL("../icons/draft_orders.svg?v=964e6aa0a7c44cf8435ff36c3873c1023c77c39efdb6403939b1c3a148aa8756",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
