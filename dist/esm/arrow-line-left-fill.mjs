export const name="arrow-line-left-fill";
export const id="dl_efa9cc3ec7024f1d82b9";
export const url=new URL("../icons/arrow-line-left-fill.svg?v=b5483ec37befe94170c07356c3679aae04335cbf8ee2afe11742daaea6181b8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
