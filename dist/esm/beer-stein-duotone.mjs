export const name="beer-stein-duotone";
export const id="dl_6bcbe20f702d419e97a4";
export const url=new URL("../icons/beer-stein-duotone.svg?v=0062da54f8962c39c6cf0289391d24eddd2337e0d6973863adca0936c75de603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
