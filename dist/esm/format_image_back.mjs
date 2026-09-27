export const name="format_image_back";
export const id="dl_48659fcf1fd5db3559ad";
export const url=new URL("../icons/format_image_back.svg?v=00293002fadd48107d36de758e5bcc52ceec6a9139e75d24992e69eff15123fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
