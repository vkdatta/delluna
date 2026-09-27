export const name="lucid_2-copy-plus";
export const id="dl_afef460d5dd1466db74b";
export const url=new URL("../icons/lucid_2-copy-plus.svg?v=973d12bde65e7faa0d7a0173bf61518824efc65e2f0988864385662cc27a72ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
