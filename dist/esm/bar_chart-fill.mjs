export const name="bar_chart-fill";
export const id="dl_c4a3ea8397c46ca0d9da";
export const url=new URL("../icons/bar_chart-fill.svg?v=3a0e78a22468f8f3e9231c974035a9c7393bb70732199f501152ff22d3b90e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
