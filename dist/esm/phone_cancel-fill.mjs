export const name="phone_cancel-fill";
export const id="dl_5bf633aece594f7caa12";
export const url=new URL("../icons/P/phone_cancel-fill.svg?v=a590a40839cf5a8c5f253e3526418fe763b8d84a3ba3a0269372bca7f80a59da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
