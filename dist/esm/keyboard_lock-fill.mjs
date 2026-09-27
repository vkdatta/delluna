export const name="keyboard_lock-fill";
export const id="dl_38c94da1f3926803dc1f";
export const url=new URL("../icons/keyboard_lock-fill.svg?v=bc17ebd82fdb1498d16991f81514b99d0db0c8ca2b22cb9039ab97559c5e5aee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
