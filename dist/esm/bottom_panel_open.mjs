export const name="bottom_panel_open";
export const id="dl_ae73457dfc00429da8b2";
export const url=new URL("../icons/bottom_panel_open.svg?v=e10f2d8004ee674ec0ddf39b48ffaa4c61564c5b6f87c54a5af211a752c4e316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
