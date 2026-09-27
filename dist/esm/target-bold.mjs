export const name="target-bold";
export const id="dl_25e796ea954283b9890a";
export const url=new URL("../icons/target-bold.svg?v=b60b22b07d69d60650948ec8cb5c47297d921632258a65606898b9091ce7a526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
