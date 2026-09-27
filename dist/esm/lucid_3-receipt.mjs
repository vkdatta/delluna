export const name="lucid_3-receipt";
export const id="dl_509c6664f36c44ac84df";
export const url=new URL("../icons/lucid_3-receipt.svg?v=9ec3c379f39c071dccac54b6660009471662dc2c631a8e6945c5a202e5dd822b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
