export const name="reset_image-fill";
export const id="dl_e428dea996e119e5889e";
export const url=new URL("../icons/reset_image-fill.svg?v=26e39725610539e67a0fb981736255648f9512d424a2f6a27aed0641d5bf2fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
