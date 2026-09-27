export const name="card_membership-fill";
export const id="dl_4448aef879dca413b3f8";
export const url=new URL("../icons/card_membership-fill.svg?v=222ba2db4f7bfd36f14cf4e2afb80a1b37eda5e615da2b91105ea5c52b1815b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
