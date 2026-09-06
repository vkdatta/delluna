export const name="file-ppt";
export const id="dl_39e1ff0474f84f069f4f";
export const url=new URL("../icons/file-ppt.svg?v=8c64615e3648bd90d6631fd7a0571605fdba22b552b0a5eaa830f45ca50c1714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
