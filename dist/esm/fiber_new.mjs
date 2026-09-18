export const name="fiber_new";
export const id="dl_fbc5fac12b814412b04d";
export const url=new URL("../icons/fiber_new.svg?v=a8530ad5953ce4c889187f8aa697d7af68c69161d462788e6ed2148626ce3653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
