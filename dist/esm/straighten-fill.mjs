export const name="straighten-fill";
export const id="dl_dcc105b0a9a23c40de1e";
export const url=new URL("../icons/straighten-fill.svg?v=565689d9d622ef8c7ddec189e7c1d5df995adc4da7d1497019f6f1da2d132269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
