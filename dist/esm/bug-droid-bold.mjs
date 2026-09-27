export const name="bug-droid-bold";
export const id="dl_a031da7c2ffa426c853e";
export const url=new URL("../icons/bug-droid-bold.svg?v=68a1875a945b75fa3c0191788d050540d95a9e25394f7a5e961a1fae3932b91a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
