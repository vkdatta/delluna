export const name="format_paint";
export const id="dl_8b507ff8f74b2113f39f";
export const url=new URL("../icons/format_paint.svg?v=2f1cd133133ec5d1bf6c2885105092d5ed03e5b70095ad5db6f3259d73354350",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
