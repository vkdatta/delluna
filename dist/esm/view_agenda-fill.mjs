export const name="view_agenda-fill";
export const id="dl_5af2698506f12b318168";
export const url=new URL("../icons/view_agenda-fill.svg?v=86943840574669acd58990b5da8472e324ddb0f6d2817eb522e302cfb069558a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
