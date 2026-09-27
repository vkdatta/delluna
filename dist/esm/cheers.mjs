export const name="cheers";
export const id="dl_c6c7c3c492e8440fab26";
export const url=new URL("../icons/cheers.svg?v=b47c98fd85f2b6ca045e52e050fbdd0bebebbf2abe128049a37803708a3d0b47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
