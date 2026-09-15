export const name="format_image_inline_right";
export const id="dl_cae675a73cd4424ea5f2";
export const url=new URL("../icons/F/format_image_inline_right.svg?v=c4b041dd2c8caf4b34973b315f59f8694940beb8c40b10aa91f69622363d1e8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
