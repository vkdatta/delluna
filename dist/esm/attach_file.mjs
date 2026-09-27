export const name="attach_file";
export const id="dl_9396f60a0d307e61d443";
export const url=new URL("../icons/material_symbols/attach_file.svg?v=cc91d20bb009156106441cc63a91601f893308e1f8065829cc58ffce2dcdd39a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
