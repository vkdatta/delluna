export const name="briefcase-metal";
export const id="dl_fb7de842f9614816b71a";
export const url=new URL("../icons/briefcase-metal.svg?v=15f6d5753c101543c2df2c5a49cd1bcb80ad0a156832c5ce506fcb1bcefc7b99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
