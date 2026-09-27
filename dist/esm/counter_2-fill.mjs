export const name="counter_2-fill";
export const id="dl_4d0117177d79b7782992";
export const url=new URL("../icons/counter_2-fill.svg?v=279bfc59a7c9325eaa37a689ee82772ed413c95721c317f44344743822646076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
