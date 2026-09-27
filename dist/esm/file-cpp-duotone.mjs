export const name="file-cpp-duotone";
export const id="dl_18dba5e111f547288670";
export const url=new URL("../icons/file-cpp-duotone.svg?v=27c65ec1ec3eabe0e4ba9d3df8980f9d41f8d2a03e16fab399b7e05be791e95b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
