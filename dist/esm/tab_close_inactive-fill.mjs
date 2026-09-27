export const name="tab_close_inactive-fill";
export const id="dl_a6547e007905f15885e0";
export const url=new URL("../icons/tab_close_inactive-fill.svg?v=c57001e909bebce0aa87ae00dde1e0a2bbbb4b38ea41a297695fa846534b9377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
