export const name="lucid_1-circle-dot";
export const id="dl_12b67f9146014f2098ad";
export const url=new URL("../icons/lucid_1-circle-dot.svg?v=6b6d9aecd9535b373ccf74220cd8b00d461d053f355495b1c51dc3c122a71e9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
