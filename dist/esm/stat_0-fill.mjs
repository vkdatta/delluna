export const name="stat_0-fill";
export const id="dl_8b42d132eb261e725517";
export const url=new URL("../icons/stat_0-fill.svg?v=1eaeeeb8201be0212b2089542ff3b5a204df40b390e66f2631d92a3123f761a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
