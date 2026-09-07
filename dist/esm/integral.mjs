export const name="integral";
export const id="dl_49ea990f4bb048bab2af";
export const url=new URL("../icons/integral.svg?v=1f4bd426625c8240c57a73700a76a338203aa69d78ab78bb9a1af8bb8f7e7c44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
