export const name="approval_delegation";
export const id="dl_cbdeee14e1f4ef4c3df3";
export const url=new URL("../icons/approval_delegation.svg?v=3b872fc7ab4348a6afa5e96b62f53a6d154e2e2ff517711c03b1c457237c44ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
