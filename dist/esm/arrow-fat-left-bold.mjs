export const name="arrow-fat-left-bold";
export const id="dl_e3143c3ef05c4e5c93c5";
export const url=new URL("../icons/arrow-fat-left-bold.svg?v=d3f3b6fa81d95fc21c95acff19e8f646d7cab2871e2faf70dc41aa99eaddfb1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
