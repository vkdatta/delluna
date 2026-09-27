export const name="x_circle-fill";
export const id="dl_bb88db2d38d8089652f2";
export const url=new URL("../icons/x_circle-fill.svg?v=f609d7a97116c920c22c428d0ceaa8cfbc8905be98d74212867aa4bf1aa97d08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
