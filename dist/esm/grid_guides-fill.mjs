export const name="grid_guides-fill";
export const id="dl_ca1850c43aaeab45bb41";
export const url=new URL("../icons/grid_guides-fill.svg?v=6153b478eac94fdb2c02351e5e797a2bd7d756e4e5c4c22429c46e5bd97a54fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
