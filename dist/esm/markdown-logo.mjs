export const name="markdown-logo";
export const id="dl_d9d5108a92314affb13f";
export const url=new URL("../icons/markdown-logo.svg?v=e38daace072be56b0dd86f926494e1f3f89c6b9b110d0f9ec17467c366eb4a45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
