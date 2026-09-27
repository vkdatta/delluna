export const name="user-key";
export const id="dl_e85f39688162404198a3";
export const url=new URL("../icons/user-key.svg?v=3ce98e5984d2f8b2c8ac53a8f1eb6ce7e805fd378f91765d62bad1a580112eda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
