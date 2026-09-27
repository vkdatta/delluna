export const name="y_circle-fill";
export const id="dl_6cdc26e58ef7011dd362";
export const url=new URL("../icons/y_circle-fill.svg?v=916cb9700d8c3b569d230e0b0a83844e911603d33e7527fc2522f7fdf979e694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
