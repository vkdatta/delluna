export const name="unite-square-duotone";
export const id="dl_6bb36b8045714e4ba778";
export const url=new URL("../icons/U/unite-square-duotone.svg?v=343c0644ce4568ee5be460e556e07aa275742d21dcf7f4a7c43a9abda9ca9c53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
