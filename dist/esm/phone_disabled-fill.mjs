export const name="phone_disabled-fill";
export const id="dl_85f11be381aa77ba1038";
export const url=new URL("../icons/phone_disabled-fill.svg?v=3f7c72e8a218782d2f04416f6ee0a9d2a13e95e80fb129b8885b92886c799e76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
