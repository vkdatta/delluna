export const name="projector-screen-chart-duotone";
export const id="dl_26fe50121aa74b5abd3b";
export const url=new URL("../icons/projector-screen-chart-duotone.svg?v=4627aa5fdf3a3100ae7eb09850496bb26bb01374d3926d9484f07030c1cf0307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
