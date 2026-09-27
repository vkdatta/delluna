export const name="markdown_copy-fill";
export const id="dl_a0fded22384e4fa0ba2c";
export const url=new URL("../icons/markdown_copy-fill.svg?v=055bb32792a9fb235be0e9f6fd324e9dcf8d6048114c8ad47f08de7b373e5fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
