export const name="local_drink-fill";
export const id="dl_2e6303315eab0e8a81a0";
export const url=new URL("../icons/local_drink-fill.svg?v=31d6f804319f606ae25d01bcf0bc63871aa530309a60524a121c8cfdd2eb86b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
