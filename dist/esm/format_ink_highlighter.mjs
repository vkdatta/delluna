export const name="format_ink_highlighter";
export const id="dl_840c2fdb017f708e634e";
export const url=new URL("../icons/format_ink_highlighter.svg?v=b0d93c37d0ccfc2068440507b37dda0dabb6fcb35f8d466e70aa35d6f26895f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
