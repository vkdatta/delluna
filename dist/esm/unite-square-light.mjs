export const name="unite-square-light";
export const id="dl_4099c4b0ee6c37a2d421";
export const url=new URL("../icons/unite-square-light.svg?v=9c5adbd6b70a23bd0893337f114098b54f78e1bf29804745258893e6af7fe39e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
