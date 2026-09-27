export const name="highlighter-circle-fill";
export const id="dl_be2a765869d24c9e8c53";
export const url=new URL("../icons/highlighter-circle-fill.svg?v=978e7a96551dc5ee0af27394907cc0352c21c1f1b4c8068ed79378c6d7ddddc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
