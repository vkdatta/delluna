export const name="lucid_2-mailbox";
export const id="dl_ae31730e768446a9985f";
export const url=new URL("../icons/lucid_2-mailbox.svg?v=d6de36abaee7c1f2fd0fac1a60d98a690f61761da6b2e48922de696250435379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
