export const name="jewelry";
export const id="dl_b6dcf41abef98a9ea10e";
export const url=new URL("../icons/jewelry.svg?v=84b1a6bbf1b5dd3091f1e4ccd25c806cff32aad5cae085ecafef7cc2798de271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
