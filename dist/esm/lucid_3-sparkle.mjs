export const name="lucid_3-sparkle";
export const id="dl_bfea95450f1d4ceeb158";
export const url=new URL("../icons/lucid_3-sparkle.svg?v=1bc320f85add4921515bb5e4b7a99a4cabc9875faeaddb8cc1049e51672cdef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
