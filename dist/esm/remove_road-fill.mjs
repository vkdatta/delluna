export const name="remove_road-fill";
export const id="dl_b231c42e297da988f3a3";
export const url=new URL("../icons/remove_road-fill.svg?v=49da9cc20530d8d1d3be2317ec737f0e578d1d342ef8c7e7088f7e7ad6c99a43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
