export const name="line_start_square-fill";
export const id="dl_95331b7aa11dd104d8ac";
export const url=new URL("../icons/line_start_square-fill.svg?v=dc44b0ee3f62dee4493c9426818a01383d79c1b67c7aeb91675cad6c5cfcfafb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
