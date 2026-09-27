export const name="format_letter_spacing_wide";
export const id="dl_bbec929b7cb8832c5af9";
export const url=new URL("../icons/format_letter_spacing_wide.svg?v=edcf07341f280f0ae052e6e53082aaf5d4c2f792494c174ec316084941d05a3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
