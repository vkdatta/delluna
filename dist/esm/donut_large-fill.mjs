export const name="donut_large-fill";
export const id="dl_ecd538f607796e2cacfb";
export const url=new URL("../icons/donut_large-fill.svg?v=2bd5905f9c7d126db9d1908b2f8b433a9ec2a60d67ea3b6a112cba7eb5d6232a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
