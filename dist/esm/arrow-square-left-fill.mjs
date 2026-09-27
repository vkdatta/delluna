export const name="arrow-square-left-fill";
export const id="dl_056bbcbf30db44b49f74";
export const url=new URL("../icons/arrow-square-left-fill.svg?v=88f90b0d69c54c12d7a7503dbbecb07df0204bd17de7a2678815e52d256186b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
