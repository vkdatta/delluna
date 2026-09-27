export const name="join";
export const id="dl_33d0d31446763e9ab445";
export const url=new URL("../icons/join.svg?v=18b5ebbbf1cdef68281da60f646769f2fde06ab4059e8cb17226031c5e181df1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
