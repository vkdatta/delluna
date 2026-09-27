export const name="format_ink_highlighter";
export const id="dl_300bacb67650148c9829";
export const url=new URL("../icons/format_ink_highlighter.svg?v=fa611ac35204617c86fe8703378abc02afdf98132ea37017d0d47c1f919dbcff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
