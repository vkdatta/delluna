export const name="diamond_shine-fill";
export const id="dl_b463bb2dd5af447ca841";
export const url=new URL("../icons/D/diamond_shine-fill.svg?v=d1b8329ce77e36c0a87d83cbb04df7d857b59b8c1b2fee3c51f94745806361af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
