export const name="projector-screen-chart-duotone";
export const id="dl_26fe50121aa74b5abd3b";
export const url=new URL("../icons/projector-screen-chart-duotone.svg?v=e27cae8ca4351a052addece23606aab3dd88c41644bad6bda85a2d6bdea63f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
