export const name="sunny-fill";
export const id="dl_f564ec07e08977bd2802";
export const url=new URL("../icons/sunny-fill.svg?v=5380976be68e424b9d9aded6a135ffbf9065f41a3c771be80f4ee5412bcaa660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
