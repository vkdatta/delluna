export const name="subtitles-fill";
export const id="dl_a5cc431a59aa1868605c";
export const url=new URL("../icons/subtitles-fill.svg?v=dc82b68d8d77114d21c421bd2b8772341a43ea1baf2fb9c179e348cca4f540b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
