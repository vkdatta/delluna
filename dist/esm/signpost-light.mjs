export const name="signpost-light";
export const id="dl_fa9da1be538eeda928c0";
export const url=new URL("../icons/signpost-light.svg?v=7ba5f4e05dbf2a2aeac6fc5cf8560b6ee96db32fd7ce22b4b5e421b43b8482ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
