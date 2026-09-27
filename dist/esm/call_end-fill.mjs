export const name="call_end-fill";
export const id="dl_57b2ec700ec18c9c0d0f";
export const url=new URL("../icons/call_end-fill.svg?v=abe6f5e2cc2910f5b1d949461014bbd47781278ac0836f8c848475e9ae372f6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
