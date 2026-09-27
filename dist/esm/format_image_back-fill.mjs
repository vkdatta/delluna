export const name="format_image_back-fill";
export const id="dl_705e7cec6117854837b1";
export const url=new URL("../icons/format_image_back-fill.svg?v=8799418fe829cd0fd0c1bf0c840f9ecd7e085b428dbdf91ed93c34a8b674df00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
