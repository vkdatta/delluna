export const name="toggle_off-fill";
export const id="dl_79b33a5a5967a50dd6ea";
export const url=new URL("../icons/toggle_off-fill.svg?v=ba7c0d3600b6d96c66b8717fd180ca04d91a32b29790bc3993d182e189efba4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
