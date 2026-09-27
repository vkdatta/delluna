export const name="angle-fill";
export const id="dl_02607e362f3c418b8694";
export const url=new URL("../icons/angle-fill.svg?v=835f9981da4ecc531d9d5d66ba5d733c0b34fd6677f527d009392ca48a4bd7d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
