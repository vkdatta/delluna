export const name="photo_size_select_small-fill";
export const id="dl_e5da87a4a8f2a71cf948";
export const url=new URL("../icons/photo_size_select_small-fill.svg?v=76a49506872ab51dd35066f8a55b88c8ad49ada4646bbb2bddd6aec025391ad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
