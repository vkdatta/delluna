export const name="battery-vertical-full-fill";
export const id="dl_8ca93062cf0a424884c5";
export const url=new URL("../icons/battery-vertical-full-fill.svg?v=c28fc1a113ca19d46630129505165f776b18971b26959bb02d685732f755b734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
