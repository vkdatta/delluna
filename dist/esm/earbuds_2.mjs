export const name="earbuds_2";
export const id="dl_dd34696985964aec9d78";
export const url=new URL("../icons/E/earbuds_2.svg?v=1607c4cff5291d5802eb037bedd39620d3281d4af63ed302e4090eead637086b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
