export const name="users-three-duotone";
export const id="dl_96ff7b03de6c82b44741";
export const url=new URL("../icons/users-three-duotone.svg?v=df3fd2011598f21e1da775035d87a1f4b0ced937ed84325134fcfb77c8d5d297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
