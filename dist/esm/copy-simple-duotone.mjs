export const name="copy-simple-duotone";
export const id="dl_f7ff2d339449426eba65";
export const url=new URL("../icons/copy-simple-duotone.svg?v=576cfad3af8daccf02889e838fcb9abbd445ad0c1a37c4f91a03167cbb54a95a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
