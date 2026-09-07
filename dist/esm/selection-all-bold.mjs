export const name="selection-all-bold";
export const id="dl_4f70abcd15194641a82c";
export const url=new URL("../icons/S/selection-all-bold.svg?v=a5db79d398382ba9c9bf0abe75290e46cf11c41464be439b66c8e3ee30a716a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
