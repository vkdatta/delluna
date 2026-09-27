export const name="hash-straight-fill";
export const id="dl_776e70ccde68421489ce";
export const url=new URL("../icons/hash-straight-fill.svg?v=6b5e44aa9fa12e54f68e518816541692ca7148b8ce1bf86520a9379f592b1091",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
