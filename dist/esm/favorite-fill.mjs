export const name="favorite-fill";
export const id="dl_e0ef593b0bb268d052f0";
export const url=new URL("../icons/favorite-fill.svg?v=1dd3898fbbd9ee5c13607f359eb3f1b465026edf89fc5c2e1bca70a8341b539b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
