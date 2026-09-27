export const name="play-pause";
export const id="dl_a3a4cc9cda0744b7968f";
export const url=new URL("../icons/play-pause.svg?v=23c4e9c321b2e30d02d4f8c51314eac3775f3ac59803fa7874487dc6f45f1ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
