export const name="markunread_mailbox";
export const id="dl_9f6ce63c2ecb8f9f69ce";
export const url=new URL("../icons/markunread_mailbox.svg?v=8c814e4846ff8007013c6f87c1a5f1cc89831c3dadc9928c62eaecd9261e4cf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
