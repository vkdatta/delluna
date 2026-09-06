export const name="markdown-logo-bold";
export const id="dl_fb2ad3f6c60b43fda8b6";
export const url=new URL("../icons/markdown-logo-bold.svg?v=d048e6999dee4b65a1e9b73329e3ccc8cf1fc48ebf00ac3753ae47b8601051cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
