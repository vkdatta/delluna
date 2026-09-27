export const name="content_paste_off-fill";
export const id="dl_b571870432855e7728c7";
export const url=new URL("../icons/content_paste_off-fill.svg?v=a5c80c9117fcd78e5e4505ea2d6465f86e5e990699ce1ec8953bc956815bab79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
