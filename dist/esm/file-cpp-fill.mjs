export const name="file-cpp-fill";
export const id="dl_dae0b6d34f0c4b43bf54";
export const url=new URL("../icons/file-cpp-fill.svg?v=c43724a42ff685c653d0e73889ff284ab8ad8dd7b35d46cf5ac0d584b6e9de4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
