export const name="caret-left-thin";
export const id="dl_611b9537f1454c1b941a";
export const url=new URL("../icons/caret-left-thin.svg?v=b983091c85209780ab72e53940847c3cfeeb7d1cf389225b75b3ea4b9ade7291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
