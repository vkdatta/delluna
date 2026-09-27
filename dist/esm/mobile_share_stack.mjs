export const name="mobile_share_stack";
export const id="dl_66b3052d0d58e4537517";
export const url=new URL("../icons/mobile_share_stack.svg?v=eb602e5ac2a17467edc0f87fc17145edf605ba9c7f156b9c818ea4ac5224a1c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
