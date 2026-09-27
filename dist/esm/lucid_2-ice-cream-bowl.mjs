export const name="lucid_2-ice-cream-bowl";
export const id="dl_71920e4cc81247d99b2a";
export const url=new URL("../icons/lucid_2-ice-cream-bowl.svg?v=6c6d54992b10797b54b78c97e63a97008be4757bd2d63a307e63cc4a839dcdbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
