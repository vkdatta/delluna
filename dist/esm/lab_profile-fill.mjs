export const name="lab_profile-fill";
export const id="dl_10f2efd4ede4476a895c";
export const url=new URL("../icons/lab_profile-fill.svg?v=1cc8beb600117b65532c6343e5c6e5899f5a201a53592a29882635e386ecfd7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
