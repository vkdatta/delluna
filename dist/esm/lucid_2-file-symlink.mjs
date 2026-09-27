export const name="lucid_2-file-symlink";
export const id="dl_5960ed121fe44a2384a1";
export const url=new URL("../icons/lucid_2-file-symlink.svg?v=c4333d4ddfb821f04fcb5d8f26115ae1aed5a634c82d1e2b3a1322776617c42c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
