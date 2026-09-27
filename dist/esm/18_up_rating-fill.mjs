export const name="18_up_rating-fill";
export const id="dl_e4a17fc69ddd101218ba";
export const url=new URL("../icons/18_up_rating-fill.svg?v=cb9b6bd31793db69419aaa4b85283b41d34dadbc370a440d530bf0862132ad99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
