export const name="currency-circle-dollar-light";
export const id="dl_8362e452261d4395b660";
export const url=new URL("../icons/currency-circle-dollar-light.svg?v=d1a19bcca67db7689b5d03654e7d9fc0b637dbf0691ea8753f58c36878e327ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
