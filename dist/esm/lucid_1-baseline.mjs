export const name="lucid_1-baseline";
export const id="dl_d7fd9960a6fc4e4db347";
export const url=new URL("../icons/lucid_1-baseline.svg?v=c4c47e52da67361837c77c1550a7dab6da53f2bcf4b1aa936152b1c44659ce52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
