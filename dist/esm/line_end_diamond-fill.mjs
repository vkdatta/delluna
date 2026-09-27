export const name="line_end_diamond-fill";
export const id="dl_17ab2fb64f435e6cde63";
export const url=new URL("../icons/line_end_diamond-fill.svg?v=6de919c0ffbb7a4b69e61e19085ab46b3d152a7d4008753997930ba2b8fc2367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
