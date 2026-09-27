export const name="resize_window-fill";
export const id="dl_99b16324e1baa422f385";
export const url=new URL("../icons/resize_window-fill.svg?v=8ad592473b28cebeeb0b11624a9ce4582de6afedd64c7f46b45a7a561e0556a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
