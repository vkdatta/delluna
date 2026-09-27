export const name="heart-break-light";
export const id="dl_0dde3bf0ff6041658f57";
export const url=new URL("../icons/heart-break-light.svg?v=6a7aa1f1bce7e5fd24bb267c57c96eae4f6724f1b76821f4f723713f672c3523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
