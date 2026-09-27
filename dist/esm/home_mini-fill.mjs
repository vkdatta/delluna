export const name="home_mini-fill";
export const id="dl_a6977b4ad9b0e67fc9d2";
export const url=new URL("../icons/home_mini-fill.svg?v=ffe59951283c5cd770fc1f4c0044f81b6508a5f06a7ddd1202096fbe9aaf78e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
