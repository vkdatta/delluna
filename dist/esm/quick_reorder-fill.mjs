export const name="quick_reorder-fill";
export const id="dl_980f2160b347bc3699c3";
export const url=new URL("../icons/quick_reorder-fill.svg?v=62b735c257ab96287f2e95b7bef3092fc94e787113ec308d42679e41e17e628c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
