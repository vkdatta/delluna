export const name="download_2-fill";
export const id="dl_cf673d53b7618bf53bd7";
export const url=new URL("../icons/download_2-fill.svg?v=2d725c244866910449eb5880ccee4b45e95965a111cd892c3549c3a9f85f6d13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
