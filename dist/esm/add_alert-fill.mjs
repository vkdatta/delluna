export const name="add_alert-fill";
export const id="dl_fa3fc1d9ba0ea5cfc86f";
export const url=new URL("../icons/add_alert-fill.svg?v=ca8b44caa8b3d99154777258a149cfba5e3f704980f01f05431ac642893f5b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
