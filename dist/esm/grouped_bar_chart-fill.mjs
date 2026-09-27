export const name="grouped_bar_chart-fill";
export const id="dl_051de6e65493f35ba633";
export const url=new URL("../icons/grouped_bar_chart-fill.svg?v=240deb1cf4094381f30a1139ffadd9bb55b6864642be7487c09fe3b2b96f2d98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
