export const name="format_text_clip";
export const id="dl_5a6a6e91940722dc4538";
export const url=new URL("../icons/format_text_clip.svg?v=1a691daeb61034f51f4f2fba1def66a657af22454b22eecef3290df9a38113bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
