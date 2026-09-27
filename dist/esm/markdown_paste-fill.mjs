export const name="markdown_paste-fill";
export const id="dl_26194119abd27481eddc";
export const url=new URL("../icons/markdown_paste-fill.svg?v=22855cd16907de157e3ad65d9c825519824f03955391d639e2d07feaa91aec3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
