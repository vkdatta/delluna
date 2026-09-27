export const name="forward_to_inbox";
export const id="dl_f5d33545457c5eed57e1";
export const url=new URL("../icons/forward_to_inbox.svg?v=22ad20571b412af72abc7511dbad5398c545afb1ba3a2b7b9c94d9bb09940f7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
