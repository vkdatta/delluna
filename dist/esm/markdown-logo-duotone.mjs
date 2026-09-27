export const name="markdown-logo-duotone";
export const id="dl_1cdbd3e4cdfc448babd3";
export const url=new URL("../icons/markdown-logo-duotone.svg?v=b6a3fe3b4e34b2ced0a8973823f071e59261440e3fa42e0c0f18b487413d6598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
