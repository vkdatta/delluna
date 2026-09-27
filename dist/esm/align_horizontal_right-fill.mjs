export const name="align_horizontal_right-fill";
export const id="dl_d68009c386877b2973cf";
export const url=new URL("../icons/align_horizontal_right-fill.svg?v=5b22bdfb3717f32a53e1438056c20c7fc459910743d4e6a522c31c283f1ff19c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
