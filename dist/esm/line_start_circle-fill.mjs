export const name="line_start_circle-fill";
export const id="dl_b228fee57e8084f407ed";
export const url=new URL("../icons/line_start_circle-fill.svg?v=238180d19ed52d50883aba54ecd571ecf714b8211da35eded577078e71cb7247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
