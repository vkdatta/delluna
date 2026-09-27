export const name="high_chair";
export const id="dl_d1bc44bf9ce92c9f3198";
export const url=new URL("../icons/high_chair.svg?v=90b52ee90ef95db5c69e4f3ec4e961d01657a05175799a7c15f7d3fea93d5d41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
