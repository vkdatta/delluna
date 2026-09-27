export const name="lucid_1-chevron-first";
export const id="dl_1f18f8eb418e4569ace8";
export const url=new URL("../icons/lucid_1-chevron-first.svg?v=16c830bcfa29cc48f3c70c9a7c2fd9e1d11db43e7483e26be4e7a6e4e242cfeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
