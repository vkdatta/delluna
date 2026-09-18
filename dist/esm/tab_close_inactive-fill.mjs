export const name="tab_close_inactive-fill";
export const id="dl_f29c280bd3e2491ab088";
export const url=new URL("../icons/tab_close_inactive-fill.svg?v=192422b257e5f072023fe0c1204445350b7f185e64ff2094f2307d6e98733b2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
