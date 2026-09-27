export const name="funnel-simple-x-bold";
export const id="dl_ed9284f77c93495e86c0";
export const url=new URL("../icons/funnel-simple-x-bold.svg?v=322060f4f0f0f1f53cbf1f9b3edcff8acfaea75535b7af5e5f28eb5dca46bf69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
