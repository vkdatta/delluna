export const name="cash-register-bold";
export const id="dl_0881d2aec3e749c297c6";
export const url=new URL("../icons/cash-register-bold.svg?v=80e9c4bc1e10f036f60da787166f546d3e75a9afd895313fb093043b54bd8370",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
