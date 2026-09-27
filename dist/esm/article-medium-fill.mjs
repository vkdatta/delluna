export const name="article-medium-fill";
export const id="dl_b04af60376bf4ea18fec";
export const url=new URL("../icons/article-medium-fill.svg?v=4eeba8ca144dfdd3a074ad252aa321467f7df9f3ecefa52437dec23d6e99cdf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
