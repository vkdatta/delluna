export const name="pen_size_1-fill";
export const id="dl_5bf88b02d24fbcfcc3f1";
export const url=new URL("../icons/pen_size_1-fill.svg?v=b42dd8a5259091afbab28ece95945dcda259333cd22b3dcb1835e48801ce430b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
