export const name="chart-pie-thin";
export const id="dl_fdaaf415b22c435e8b24";
export const url=new URL("../icons/chart-pie-thin.svg?v=e526d1bc94d9b6bdec2d398ee4dd7080d27220526b6a403b776c8f923bf4995d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
