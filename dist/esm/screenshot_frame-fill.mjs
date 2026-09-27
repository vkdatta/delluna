export const name="screenshot_frame-fill";
export const id="dl_81d507d4e1648ce0b500";
export const url=new URL("../icons/screenshot_frame-fill.svg?v=6319c08742f6947677e33d808cfb752e1515ae19294015dc75b32200d048b3b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
