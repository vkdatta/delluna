export const name="user-check";
export const id="dl_528f59de4f5dace630fe";
export const url=new URL("../icons/user-check.svg?v=d335ff6a84f2e15b0582aac14ddfb1a3ad3f83190d2211da1a4a20141eef9e3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
