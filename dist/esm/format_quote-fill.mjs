export const name="format_quote-fill";
export const id="dl_51807ee7d1d876fd4794";
export const url=new URL("../icons/format_quote-fill.svg?v=b851d4c378446d7e4898797520c890a4c4d22c3fca26f85490f8d08e21567de0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
