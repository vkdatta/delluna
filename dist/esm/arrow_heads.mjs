export const name="arrow_heads";
export const id="dl_2f9959b689bb425280a1";
export const url=new URL("../icons/arrow_heads.svg?v=61cc9f313ae4efca67196153e405e746d9fec8bfcf8e8abab8eb3e9825bfb494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
