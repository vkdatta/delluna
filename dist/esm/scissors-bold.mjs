export const name="scissors-bold";
export const id="dl_0aee1dbf289c4058b68c";
export const url=new URL("../icons/S/scissors-bold.svg?v=10d7c433d8284923caa353edbfa984be5c9b12aab331c36d3f250f3bd7656a1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
