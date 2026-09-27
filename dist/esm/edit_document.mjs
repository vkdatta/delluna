export const name="edit_document";
export const id="dl_688fb9ae6fbc385bd58f";
export const url=new URL("../icons/edit_document.svg?v=6e458e990c73983f4fdeca9103d6d66bda6865a18c2df7b68ad07664ba50ce2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
