export const name="bar_chart";
export const id="dl_c2a0aef56c5ed2c1b4b7";
export const url=new URL("../icons/material_symbols/bar_chart.svg?v=9064fb508a506dd437191c88933674edc022fe7f1a3f0348da6d1c78b981c7a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
