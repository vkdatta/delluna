export const name="contrast_rtl_off-fill";
export const id="dl_8b6aa5884ecf57067393";
export const url=new URL("../icons/contrast_rtl_off-fill.svg?v=8d83ad4771d94148eaf327cf603158664926fb280c927d515ce0f5ce2ce73284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
