export const name="forward_to_inbox";
export const id="dl_f8c8c4d965168e96be9c";
export const url=new URL("../icons/forward_to_inbox.svg?v=94d2b5ebe7d2d46856998fc785abcc0418349399763e38c2253ec151cc500a2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
