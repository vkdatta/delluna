export const name="phone-transfer-fill";
export const id="dl_df5081355222488b8a5c";
export const url=new URL("../icons/phone-transfer-fill.svg?v=ebc3eec53a5291b15658e1f543d7a7ef24bd6964b422e6ccfebf797cdf16c1b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
