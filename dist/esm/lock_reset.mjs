export const name="lock_reset";
export const id="dl_0b1ea5f296e6ddc6ceb2";
export const url=new URL("../icons/lock_reset.svg?v=16cd4675be9acae8c88292858867d8fc6e2535eefef258aeeff57f02fd8d7df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
