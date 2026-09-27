export const name="lucid_3-paintbrush";
export const id="dl_28b59e88f8544dde9e2e";
export const url=new URL("../icons/lucid_3-paintbrush.svg?v=a10aba7767f7641657472c500411d2de577ecc7903398bba3bd6d06a867561df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
