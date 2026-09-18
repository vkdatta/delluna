export const name="newsmode";
export const id="dl_a8447ab062c747778882";
export const url=new URL("../icons/N/newsmode.svg?v=3d5ce22b49961c5ddddf5168f89d6af36610141dbe7d2e0f6257a6321daebd00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
