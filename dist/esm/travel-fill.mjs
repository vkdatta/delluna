export const name="travel-fill";
export const id="dl_595e540359052fb397a9";
export const url=new URL("../icons/travel-fill.svg?v=807f68e2f3571b4ddd23d435b8ed2901eb42e8cb52c558147d489c1865a26f39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
