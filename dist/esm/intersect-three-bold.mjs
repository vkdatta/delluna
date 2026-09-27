export const name="intersect-three-bold";
export const id="dl_1af9b7693b0847058788";
export const url=new URL("../icons/intersect-three-bold.svg?v=2aae0c10f44c55a5d73cb07ebdfcf45353631bf34c964cd720505f888c561c1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
