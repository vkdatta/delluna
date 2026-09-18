export const name="text_fields-fill";
export const id="dl_181f439efda04a3c86b8";
export const url=new URL("../icons/text_fields-fill.svg?v=4ff36eb7de991b6077eada383db7816ceb3012039779b525c70ab72f1a0134ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
