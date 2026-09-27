export const name="x-square-bold";
export const id="dl_33b50a18937401153918";
export const url=new URL("../icons/x-square-bold.svg?v=123d51cde395b1986fe9a4d3fa4bc670d672af006f9938c7ad43b6ad631a5856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
