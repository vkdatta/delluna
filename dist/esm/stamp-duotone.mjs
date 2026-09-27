export const name="stamp-duotone";
export const id="dl_41b89cfcdbdd877ac456";
export const url=new URL("../icons/stamp-duotone.svg?v=7d65eb49135a328bbfca23e52f43b8aacb04e740992b0b60d9e35e6736f2e5ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
