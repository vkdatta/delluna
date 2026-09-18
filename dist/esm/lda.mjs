export const name="lda";
export const id="dl_93d399d668924f748a30";
export const url=new URL("../icons/lda.svg?v=a5f9cb65979f4659e91298e4055630e86c071a2bb89633acea4a8cbc60b5e7d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
