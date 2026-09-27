export const name="table_view";
export const id="dl_ecdd056107176f753d0f";
export const url=new URL("../icons/table_view.svg?v=e08ccc5903d0633d33b911f19efc1a92a0198ba4645c37cdd63feef6ae24600d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
