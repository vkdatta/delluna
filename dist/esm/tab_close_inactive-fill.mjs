export const name="tab_close_inactive-fill";
export const id="dl_4f25c57b1c47f65bc208";
export const url=new URL("../icons/tab_close_inactive-fill.svg?v=c342a2994579fafd7f5499763d3ebd63ad5f1a7827b861c65ef7d0c74e7a3565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
