export const name="bug-fill";
export const id="dl_330797ef80ad4c6dbbae";
export const url=new URL("../icons/bug-fill.svg?v=e6da99f917c2cc5dd7cfb876b034268314f855b7eb5e71bc0c26fa26cc752fe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
