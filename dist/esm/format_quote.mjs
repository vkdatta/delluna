export const name="format_quote";
export const id="dl_c66d369490393f2970b4";
export const url=new URL("../icons/format_quote.svg?v=22352a30089bb6eff82d37bd7780b6bb64f39965760420cba190578e182a3820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
