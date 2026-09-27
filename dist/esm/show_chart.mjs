export const name="show_chart";
export const id="dl_697ee08ec1b65a566d5f";
export const url=new URL("../icons/material_symbols/show_chart.svg?v=45db55df066bee97e27ea63b5dd95e37d8e6cfd92ea7deb4b95ea889e5d01f00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
