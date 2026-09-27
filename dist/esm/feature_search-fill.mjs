export const name="feature_search-fill";
export const id="dl_3d931012cc84c2fe051b";
export const url=new URL("../icons/feature_search-fill.svg?v=5f2508186a2d33f29764626c20d8265119fae0ac612233228d4fb91cf9eac97f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
