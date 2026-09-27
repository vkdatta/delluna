export const name="lucid_3-server-off";
export const id="dl_fef5953dddb3465d8c13";
export const url=new URL("../icons/lucid_3-server-off.svg?v=a465db460977b6c975234128bca58b3aac07caa48a291140a9797ab8f12a8fa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
