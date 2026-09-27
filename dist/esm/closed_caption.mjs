export const name="closed_caption";
export const id="dl_698fff28808501d5e7cc";
export const url=new URL("../icons/closed_caption.svg?v=f30227b57af0b2f29614609d602bdb7d215ca02da7193eb39f7a5e05154e68e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
