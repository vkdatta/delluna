export const name="folder-plus-fill";
export const id="dl_cf7f101bba2946d29832";
export const url=new URL("../icons/folder-plus-fill.svg?v=cfcf6717d7d706189f60a00e7c214781518848716f2c386213cb36c39c450ab7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
