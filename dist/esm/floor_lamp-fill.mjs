export const name="floor_lamp-fill";
export const id="dl_69937bfa148e84aaaa2c";
export const url=new URL("../icons/floor_lamp-fill.svg?v=a5a92bf8a4de6b33b640c0e133e9752c527499db7f2c12dec8af26be8764453d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
