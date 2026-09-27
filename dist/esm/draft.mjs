export const name="draft";
export const id="dl_b9ad188ad420e11cf0d0";
export const url=new URL("../icons/draft.svg?v=f73000cb3e25d3b73d6876cd51424f3af7c2a8576e1b9994c8e7c93d24470b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
