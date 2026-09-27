export const name="format_bold-fill";
export const id="dl_0731ce24f1a10832b383";
export const url=new URL("../icons/format_bold-fill.svg?v=e2845302dfb18d17643754473e3e784a74f49d0fe945ff3a5ed3d164fe893483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
