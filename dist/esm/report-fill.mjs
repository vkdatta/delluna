export const name="report-fill";
export const id="dl_d9379d22d36302d3d19d";
export const url=new URL("../icons/report-fill.svg?v=1247e310dcf67b6bdadc1420ac1f86cfbda3af51c7eb1f295d679b6e0586804b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
