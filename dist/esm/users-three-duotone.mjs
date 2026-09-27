export const name="users-three-duotone";
export const id="dl_c23d0b41cf9fcf8a986b";
export const url=new URL("../icons/users-three-duotone.svg?v=b837f7aa844b91c25cf45b3ff63d7de5f85b2d66033bbcb9332084cbc8806dc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
