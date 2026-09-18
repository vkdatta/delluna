export const name="report_off-fill";
export const id="dl_b46f8db8222e483a9052";
export const url=new URL("../icons/R/report_off-fill.svg?v=69c8b5efd4b38e582010dbc070d18c8ad005aba01a2362fe3f30c84ad0f28f4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
