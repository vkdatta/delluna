export const name="lucid_2-copy-plus";
export const id="dl_afef460d5dd1466db74b";
export const url=new URL("../icons/lucid_2-copy-plus.svg?v=1cf499d2f3eb46bbf2646017e7d069eccb47f248e19bb4626c3c85e0db9b0516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
