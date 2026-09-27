export const name="table_lamp-fill";
export const id="dl_3308988c3537427c8407";
export const url=new URL("../icons/table_lamp-fill.svg?v=cec22e13d0e6d0e0211f4d10bc43db6ff6929453b40f5c4065d78c3d5dc45472",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
