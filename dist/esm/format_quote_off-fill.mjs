export const name="format_quote_off-fill";
export const id="dl_536e59c42c4832f04d8a";
export const url=new URL("../icons/format_quote_off-fill.svg?v=f546a88f2960ae3dfb447a314bf34b7ce3ee48aced9a5ad32628b51a5a6debe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
