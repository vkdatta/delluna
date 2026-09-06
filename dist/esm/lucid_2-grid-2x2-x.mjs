export const name="lucid_2-grid-2x2-x";
export const id="dl_6c75ed3746f746a097ef";
export const url=new URL("../icons/lucid_2-grid-2x2-x.svg?v=6fca174e82410ad4fb0b81301051c6139c76d2dc8e45b266f3213ecc54ca6ff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
