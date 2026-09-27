export const name="markdown_copy";
export const id="dl_6dbf2e0cede0b2e3a8a4";
export const url=new URL("../icons/markdown_copy.svg?v=212a8452b273fbae08af27c76124e174528f2b0aa0bb29b9624dfbf57862242a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
