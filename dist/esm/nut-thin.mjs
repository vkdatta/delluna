export const name="nut-thin";
export const id="dl_d843e75d37e147339743";
export const url=new URL("../icons/nut-thin.svg?v=58f37844938bb7b9740d51d4c2fa0f17db899b5f6ac5e68bb7f447d6456ca614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
