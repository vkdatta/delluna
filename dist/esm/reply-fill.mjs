export const name="reply-fill";
export const id="dl_3fc3939f2b231454a3de";
export const url=new URL("../icons/reply-fill.svg?v=ba577c6cf89163ca54ecfcdaac9c64d0d5241cdbbdbc0a39c445857513dd8bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
