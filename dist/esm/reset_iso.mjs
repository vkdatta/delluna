export const name="reset_iso";
export const id="dl_80fdae69318113c9f702";
export const url=new URL("../icons/reset_iso.svg?v=fe06d1a17ffabfa0d448dcb230039d684fea38e41c5eeaf5917738a558af9166",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
