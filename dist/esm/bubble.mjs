export const name="bubble";
export const id="dl_f7492fd1598b43d58780";
export const url=new URL("../icons/bubble.svg?v=004781844b43fc3442895191e040a1284c36ed57b619d2a2827a6eb296e7a032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
