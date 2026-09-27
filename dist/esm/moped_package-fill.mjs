export const name="moped_package-fill";
export const id="dl_d592669cf0ba9794dea1";
export const url=new URL("../icons/moped_package-fill.svg?v=ec1a4a307c3118b678077ec8edbcc7928b1d9472a11ed42c468181d6b6996233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
