export const name="filter_retrolux-fill";
export const id="dl_bcea9f3e3a54bca6fc88";
export const url=new URL("../icons/filter_retrolux-fill.svg?v=ca93bb73c8441c88943496aecf2e270a817d7479326a2e437cbf72dd38e00238",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
