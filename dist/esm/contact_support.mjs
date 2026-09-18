export const name="contact_support";
export const id="dl_46fbd64ed6c149c2847a";
export const url=new URL("../icons/contact_support.svg?v=6ccc30dca1551f888884607f6c1231091cd20f729cb17fcf7c88f6619985ce22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
