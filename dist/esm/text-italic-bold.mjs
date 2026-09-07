export const name="text-italic-bold";
export const id="dl_64996c2d48304a6c8199";
export const url=new URL("../icons/T/text-italic-bold.svg?v=80fac56bbbb79b482882baaf90ca4f486c8298640e1663e73b4ca68b6d76df3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
