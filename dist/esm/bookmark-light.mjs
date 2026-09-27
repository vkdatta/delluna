export const name="bookmark-light";
export const id="dl_3336e74aff834c2ebb0f";
export const url=new URL("../icons/bookmark-light.svg?v=737d8a2ffe7937690f47366715d9a1c837c66d2734cf556a8cd3334f29ce3663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
