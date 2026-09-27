export const name="table_eye";
export const id="dl_d120b10d5fe6028bd011";
export const url=new URL("../icons/table_eye.svg?v=32db5f83b7b80bf12fcca77768f90267d3bba0dfde2c26d4c9adfd090a5ea79a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
