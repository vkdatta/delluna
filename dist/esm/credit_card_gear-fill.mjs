export const name="credit_card_gear-fill";
export const id="dl_7510382d2337c20fc64d";
export const url=new URL("../icons/credit_card_gear-fill.svg?v=65751ae7e7aa081a53f04012f47bad04372f3eaf18df3abdee5208c9967a086b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
