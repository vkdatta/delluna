export const name="file-xls-duotone";
export const id="dl_f4814cc9637548d9a1e8";
export const url=new URL("../icons/file-xls-duotone.svg?v=21f54232302322e4bda83ce2d943142bb7f203ff98ffa3256e471aada82c3475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
