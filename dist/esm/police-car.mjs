export const name="police-car";
export const id="dl_7494d3e6db1742b3ae9c";
export const url=new URL("../icons/police-car.svg?v=c346c7a16a3eddf850ca6b1cde9e02a7d7ca66b512100844b10820ed523fc104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
