export const name="format_color_reset";
export const id="dl_650ba58a2e56c6f5875f";
export const url=new URL("../icons/format_color_reset.svg?v=f50502854dd96db5dc35eaebdec41fd9a9fa7dd3e8f291e7a4bdc34b2e299c0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
