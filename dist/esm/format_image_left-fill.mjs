export const name="format_image_left-fill";
export const id="dl_aeb8ba928c23786f08fe";
export const url=new URL("../icons/format_image_left-fill.svg?v=6c7d4db472d60c958676f77dbc2c685e6461e5b644f9ad514b74472d364c465d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
