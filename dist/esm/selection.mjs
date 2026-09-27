export const name="selection";
export const id="dl_ef0c5990009d2f195edc";
export const url=new URL("../icons/selection.svg?v=11a6e02437421a1a4222ee822f4ce25fc95520dd8f0765e1fe2d7a7d276b5d6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
