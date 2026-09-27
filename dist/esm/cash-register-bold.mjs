export const name="cash-register-bold";
export const id="dl_0881d2aec3e749c297c6";
export const url=new URL("../icons/cash-register-bold.svg?v=f5dc1a8f723b80dc182371cffb4c35d7b2ae9a845775ac423f434c229593911b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
