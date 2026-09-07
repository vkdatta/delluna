export const name="chats-circle-duotone";
export const id="dl_d91361b33c9b45dc82d1";
export const url=new URL("../icons/chats-circle-duotone.svg?v=b760d5cc31d6e86191969557d908c1f3238f3742b4d991ec8ec67b74c578b552",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
