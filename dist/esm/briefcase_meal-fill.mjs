export const name="briefcase_meal-fill";
export const id="dl_671bc08ca9d04e1c8c10";
export const url=new URL("../icons/B/briefcase_meal-fill.svg?v=bce93c1d17c3ac3c58f8da1aa0623c0d8b56a0d6ca16a3c3a9130e711ec67071",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
