export const name="folder_special";
export const id="dl_818796aaf8b945b198ab";
export const url=new URL("../icons/F/folder_special.svg?v=2c194a1c65e1988a5fa52f8f70c65b91f3f99ea102b662bbbaf613a808e6ad4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
