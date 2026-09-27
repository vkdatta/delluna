export const name="stylus_highlighter";
export const id="dl_7f090ac943db483ca080";
export const url=new URL("../icons/stylus_highlighter.svg?v=67b88478e10b864e2049c9bdc0522ab15cf8fec01d3fdb53241317d064ebeb1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
