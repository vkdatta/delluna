export const name="intersect-three-bold";
export const id="dl_1af9b7693b0847058788";
export const url=new URL("../icons/intersect-three-bold.svg?v=a449faa3ab57898285368383da1762158392abb1d5c5fe9b857fece774b6af1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
