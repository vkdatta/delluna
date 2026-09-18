export const name="iron";
export const id="dl_21c165fad7464263b333";
export const url=new URL("../icons/I/iron.svg?v=6f8b4341e49f1808f584d95dfc137bf134db1ee4f121a634457aba7c863298e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
