export const name="edit_document";
export const id="dl_688fb9ae6fbc385bd58f";
export const url=new URL("../icons/edit_document.svg?v=7f3440c56b66ffb047e57e1e197aac36cbf3a7db234f877f221a2717ff40291c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
