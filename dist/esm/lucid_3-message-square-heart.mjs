export const name="lucid_3-message-square-heart";
export const id="dl_c5ca3c6cd98544eaa054";
export const url=new URL("../icons/lucid_3-message-square-heart.svg?v=9c6e05112355aa57c9e2f05cb9c976306086d4296179d28d2d5716f5606e5dcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
