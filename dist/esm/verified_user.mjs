export const name="verified_user";
export const id="dl_e356140ed921fa8319a8";
export const url=new URL("../icons/verified_user.svg?v=50ded65279da4d535b8de8cd965ba1056a8c930ad02ab304072f00e7b92dc117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
