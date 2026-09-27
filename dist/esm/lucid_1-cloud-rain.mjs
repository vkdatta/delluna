export const name="lucid_1-cloud-rain";
export const id="dl_db95ee0d37d94101b2fc";
export const url=new URL("../icons/lucid_1-cloud-rain.svg?v=801fd2878d4a35cf70bb5e9673f4f2d815f250855861b9609ddeba5666a9493a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
