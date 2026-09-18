export const name="moped_package-fill";
export const id="dl_1be34dff407e44859451";
export const url=new URL("../icons/moped_package-fill.svg?v=8270d866b10a0a688006de46e06e9db2ee043c5780b3df75e444c9dfd93c7051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
