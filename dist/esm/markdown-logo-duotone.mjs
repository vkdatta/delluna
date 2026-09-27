export const name="markdown-logo-duotone";
export const id="dl_1cdbd3e4cdfc448babd3";
export const url=new URL("../icons/markdown-logo-duotone.svg?v=92b6a3ec1a4c0862a64ef350ab3d320517edf0e1d2f80953d332ba5145e9c9da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
