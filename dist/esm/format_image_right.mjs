export const name="format_image_right";
export const id="dl_c0043096ef79b7cfc451";
export const url=new URL("../icons/format_image_right.svg?v=67f390269fb28e1a23d8ddcae69f1747eef1ed43b4f55fae4bdef27fabd3f3c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
