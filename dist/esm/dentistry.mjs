export const name="dentistry";
export const id="dl_60e258e563b34a9182ae";
export const url=new URL("../icons/D/dentistry.svg?v=2a6f67e66eddff19222a40fade0aeb0e8d787bf2a41e46733e9704c614471b0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
