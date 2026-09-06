export const name="file-doc-duotone";
export const id="dl_c8f90c3bb70047f1a8e2";
export const url=new URL("../icons/file-doc-duotone.svg?v=71ba3e223c85300609dcdbcbb29b8eb3535a6e44353edfe6f2ca8ff68bcf16f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
