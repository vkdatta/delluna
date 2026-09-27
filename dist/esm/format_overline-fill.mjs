export const name="format_overline-fill";
export const id="dl_ebab855e754c87cf4025";
export const url=new URL("../icons/format_overline-fill.svg?v=41b4f3c5e45dbed2ca0dfdff69e61213b7a770da64fb636b0d716b4ef51818a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
