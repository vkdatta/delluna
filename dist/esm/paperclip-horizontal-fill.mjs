export const name="paperclip-horizontal-fill";
export const id="dl_6490065ec1314170809f";
export const url=new URL("../icons/paperclip-horizontal-fill.svg?v=b8c0dfddf4099396af659aa720b1ddfcab5d9d87a2d7c79fb481bb22856da31e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
