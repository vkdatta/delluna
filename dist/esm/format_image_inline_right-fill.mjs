export const name="format_image_inline_right-fill";
export const id="dl_fc448c6562f397d05830";
export const url=new URL("../icons/format_image_inline_right-fill.svg?v=14f577a7f8334dad09a155a77e75202069bc5349cb0b4c06d9fdffbd525976d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
