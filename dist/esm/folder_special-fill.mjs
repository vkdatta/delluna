export const name="folder_special-fill";
export const id="dl_3f2c10da102ae2c8f6c8";
export const url=new URL("../icons/folder_special-fill.svg?v=0f8ce56a8421fba458900cd8e08c52038f6d0f5dc55af9b192edaaefecbf0697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
