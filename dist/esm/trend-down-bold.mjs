export const name="trend-down-bold";
export const id="dl_ad6860ddf94edac5e788";
export const url=new URL("../icons/trend-down-bold.svg?v=7f595ccd58e4de2eb3c25202216c6c9a6f685f627693e7e9cad96549ba0de293",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
