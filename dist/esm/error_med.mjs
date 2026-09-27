export const name="error_med";
export const id="dl_39e5c4ba0cc906482e6f";
export const url=new URL("../icons/error_med.svg?v=d357b32abec9257dd20615276b1de9409b1333d3fa1ebf8495ad7ba5b0ba5d76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
