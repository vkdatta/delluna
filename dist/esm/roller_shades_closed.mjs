export const name="roller_shades_closed";
export const id="dl_da179699dd2f48958de9";
export const url=new URL("../icons/roller_shades_closed.svg?v=560320e98aca89565a04efc521d262bd249f3d0b236c01d3c18c5b08b8e0d83f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
