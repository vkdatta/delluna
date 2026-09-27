export const name="file-png-duotone";
export const id="dl_c31311e3082c4a87853b";
export const url=new URL("../icons/file-png-duotone.svg?v=d81e10e3bfc2d4d9eb090799b4ff5dba5c43917b07419deb5d49b6519cb49191",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
