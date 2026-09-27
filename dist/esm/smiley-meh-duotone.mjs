export const name="smiley-meh-duotone";
export const id="dl_b8c07fa4fb449d21be9e";
export const url=new URL("../icons/smiley-meh-duotone.svg?v=e0c5bd7540c26353b2e5970ef3017fb5160b704008383ce8e0c1941839e7735b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
