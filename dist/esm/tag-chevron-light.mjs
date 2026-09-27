export const name="tag-chevron-light";
export const id="dl_de5bd06e9f02e4cdaee8";
export const url=new URL("../icons/tag-chevron-light.svg?v=922116e5e60937f4b1f5946e83220e2e22e28c27fadce8e8e304c42b86f10521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
