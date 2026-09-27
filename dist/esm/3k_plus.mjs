export const name="3k_plus";
export const id="dl_aaea2568a098e35de031";
export const url=new URL("../icons/3k_plus.svg?v=378abd74132bc9082ed73cc606d2d491ad3c39013d1e76fc12a3d144ea9892cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
