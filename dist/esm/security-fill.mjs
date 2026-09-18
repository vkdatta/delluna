export const name="security-fill";
export const id="dl_595633fb37334325a826";
export const url=new URL("../icons/S/security-fill.svg?v=a9d2d1a9d99ef2596363784c96cfb4f9c3b198fc7f8301c1e260d108a76fdb81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
