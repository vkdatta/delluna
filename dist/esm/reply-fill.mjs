export const name="reply-fill";
export const id="dl_8cb6f1f2e6624047a435";
export const url=new URL("../icons/R/reply-fill.svg?v=ba577c6cf89163ca54ecfcdaac9c64d0d5241cdbbdbc0a39c445857513dd8bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
