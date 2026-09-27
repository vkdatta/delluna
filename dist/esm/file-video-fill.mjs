export const name="file-video-fill";
export const id="dl_f7d779b8ab0c4c7f8d21";
export const url=new URL("../icons/file-video-fill.svg?v=dd4eb22e123a777c9bce0c1ca59a96e0a5c5039281c2e0821fbf50c6915e062b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
