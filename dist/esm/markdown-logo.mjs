export const name="markdown-logo";
export const id="dl_d9d5108a92314affb13f";
export const url=new URL("../icons/markdown-logo.svg?v=cd9b99e53a22afcdd9dfd873750c81c7e35cd446b3bfbbc4b8cf46c9ba477ba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
