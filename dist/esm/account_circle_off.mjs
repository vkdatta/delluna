export const name="account_circle_off";
export const id="dl_eac6b5d44f88c27d7a54";
export const url=new URL("../icons/account_circle_off.svg?v=a461f45ae2b4287fb564a477c9fae44f306d7c13fb23c5cb98de91196b008e03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
