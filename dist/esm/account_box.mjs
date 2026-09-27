export const name="account_box";
export const id="dl_c9bea6e48a7a53168eeb";
export const url=new URL("../icons/account_box.svg?v=2afdd00616716c1e6ab85f05fe38cf6605de9fea65094c74bbd977594a53af09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
