export const name="user-gear-fill";
export const id="dl_84d6320a043a4a90be7d";
export const url=new URL("../icons/U/user-gear-fill.svg?v=5aad4e988f629afd3b5b94260e8134f197bdda8b66d51ae168cea6c5db1f7fd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
