export const name="toolbar";
export const id="dl_bbf15edd0dae41c97d88";
export const url=new URL("../icons/toolbar.svg?v=19ca85a016fc3fbc96f10442cdf0f8ebdc1cba1e4ba408c256ed551fa9988f82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
