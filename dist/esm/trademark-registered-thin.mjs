export const name="trademark-registered-thin";
export const id="dl_0b8b1a816fa7c3fa52ee";
export const url=new URL("../icons/trademark-registered-thin.svg?v=92241aee583c4dd2254a96140b81de7ed92c0f150562a91161c797de9e5909ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
