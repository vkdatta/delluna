export const name="kanji_alcohol-fill";
export const id="dl_8b1643e8ddd3db852054";
export const url=new URL("../icons/kanji_alcohol-fill.svg?v=1d60e495e968959db1b77fd664bc7447b00a50c29c47ea898e09c8a54177876c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
