export const name="glyphs-fill";
export const id="dl_f87d94e2d0dc974ca053";
export const url=new URL("../icons/glyphs-fill.svg?v=d1c900d75a77f95e83d936685bfe19185d910bbf3052f662147e09201f3c7692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
