export const name="hot_tub-fill";
export const id="dl_7b53e7d09fcedd4a1edc";
export const url=new URL("../icons/hot_tub-fill.svg?v=bfc6b5373b07b92ceee644cb834eb39e8fd871f529b5281c79771fd56464060b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
