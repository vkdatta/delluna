export const name="square-stack";
export const id="dl_24ae6fbffa664b10b868";
export const url=new URL("../icons/square-stack.svg?v=43c5398d134927625926c5588525b2550abf795730690a66280bab050fe63a00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
