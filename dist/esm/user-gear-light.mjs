export const name="user-gear-light";
export const id="dl_d1b1335f52034a5814a3";
export const url=new URL("../icons/user-gear-light.svg?v=ee5d92a938d84acea6cafc92a4850f397ef5d6c051b1b4e3992820e1d1f8c394",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
