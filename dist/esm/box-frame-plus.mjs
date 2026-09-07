export const name="box-frame-plus";
export const id="dl_3018cf4914f14fe39208";
export const url=new URL("../icons/add/box-frame-plus.svg?v=d56e8567685e7414b637a1e6a713fc9d0c187941b616a8ba4bf628613a58b946",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
