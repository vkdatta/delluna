export const name="lips-fill";
export const id="dl_8085593480568a551f0b";
export const url=new URL("../icons/lips-fill.svg?v=8f556888f6531737c026ec6238806f8362b1326b958eefa2ca0fcb46f611004d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
