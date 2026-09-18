export const name="pin_history-fill";
export const id="dl_fe25a441eb9849af80c0";
export const url=new URL("../icons/pin_history-fill.svg?v=7644376d1c071df79858487ed69728af629aa22a93c484ce40396f3c5c7157d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
