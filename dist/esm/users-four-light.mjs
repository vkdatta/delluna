export const name="users-four-light";
export const id="dl_1704ac1d5faeaf8023f1";
export const url=new URL("../icons/users-four-light.svg?v=83a7e2e2d0619a2a1add5f168e0ed2ac562083bf6fca95d09c4f6cb7e6e38b2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
