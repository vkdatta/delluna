export const name="arrow-line-up-left-fill";
export const id="dl_30e4c7ace49843f0a927";
export const url=new URL("../icons/arrow-line-up-left-fill.svg?v=9ce32d9d3753287165e999e2bd63d0e4c6b8c4513ca9c4b9dd1a7ccd322a6a1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
