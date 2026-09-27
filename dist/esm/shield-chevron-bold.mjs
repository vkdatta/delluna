export const name="shield-chevron-bold";
export const id="dl_5121abcbfb1e404e8532";
export const url=new URL("../icons/shield-chevron-bold.svg?v=e7d9f4e73a8c5ad76fe0ab8d6af59b9a582f1985d8b0d5da114dba3c73caa7e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
