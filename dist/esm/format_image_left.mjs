export const name="format_image_left";
export const id="dl_96aa46149c1a46778595";
export const url=new URL("../icons/F/format_image_left.svg?v=253576d349fb6647480e448757d5371b4d8be402f31d07820b96c05ea4775882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
